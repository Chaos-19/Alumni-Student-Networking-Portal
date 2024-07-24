package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/Chaos-19/Alumni-Student-Networking-Portal/module"
	mm "github.com/Chaos-19/Alumni-Student-Networking-Portal/module/mentorship"
	um "github.com/Chaos-19/Alumni-Student-Networking-Portal/module/user"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/storage"
	ms "github.com/Chaos-19/Alumni-Student-Networking-Portal/storage/mentorship"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/storage/user"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/view"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/view/mentorship"
	uv "github.com/Chaos-19/Alumni-Student-Networking-Portal/view/user"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/golang-migrate/migrate/v4"
	_ "github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

func InitiateMigration(path, conn string) *migrate.Migrate {
	m, err := migrate.New(fmt.Sprintf("file://%s", path), conn)
	log.Println(context.Background(), "connection "+conn+" "+path)

	if err != nil {
		log.Fatal("could not create migrator", err)
	}

	return m
}

func UpMigration(m *migrate.Migrate) {
	err := m.Up()
	if err != nil && err != migrate.ErrNoChange {
		log.Fatal("could not migrate", err)
	}
}

func NewDB(url string) (*gorm.DB, error) {
	newLogger := logger.New(
		log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer
		logger.Config{
			SlowThreshold:             time.Second,   // Slow SQL threshold
			LogLevel:                  logger.Silent, // Log level
			IgnoreRecordNotFoundError: true,          // Ignore ErrRecordNotFound error for logger
			ParameterizedQueries:      true,          // Don't include params in the SQL log
			Colorful:                  false,         // Disable color
		},
	)
	conn, err := gorm.Open(postgres.Open(url), &gorm.Config{
		SkipDefaultTransaction: true,
		Logger:                 newLogger,
	})

	if err != nil {
		return nil, err
	}

	return conn, nil
}

func NewStorage(db *gorm.DB) storage.Storage {
	return storage.Storage{
		User:       user.NewUserStorage(db),
		Mentorship: ms.NewMentorshipStorage(db),
	}
}

func NewModule(s storage.Storage) module.Module {
	return module.Module{
		User:       um.NewUserModule(s.User, ""),
		Mentorship: mm.NewMentorshipModule(s.Mentorship),
	}
}

func NewView(m module.Module) view.View {
	return view.View{
		User:       uv.NewUserView(m.User),
		Mentorship: mentorship.NewMentorshipViewView(m.Mentorship)}
}

func main() {
	db, err := NewDB(os.Getenv("DB_DSN"))
	if err != nil {
		log.Fatal("unable to start db", err)
	}

	// run migration
	m := InitiateMigration("/sql/schemas", os.Getenv("DB_DSN"))
	UpMigration(m)
	// init basic service
	storage := NewStorage(db)
	module := NewModule(storage)
	view := NewView(module)

	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"PATCH", "GET", "POST", "OPTIONS", "PUT", "DELETE"},
		AllowHeaders:     []string{"Accept", "Authorization", "Cache-Control", "Content-Type", "DNT", "If-Modified-Since", "Keep-Alive", "Origin", "User-Agent", "X-Requested-With", "x-user-id"},
		ExposeHeaders:    []string{"Content-Length", "Authorization"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	v1 := r.Group("/v1")

	v1.POST("/users", view.User.CreateUser)
	v1.POST("/users/login", view.User.Login)
	v1.POST("/mentorships", view.Mentorship.CreateMentorship)

	err = r.Run(":8081")
	if err != nil {
		log.Fatal("error starting the server", err)
	}
}
