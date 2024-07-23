package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/Chaos-19/Alumni-Student-Networking-Portal/module"
	um "github.com/Chaos-19/Alumni-Student-Networking-Portal/module/user"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/storage"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/storage/user"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/view"
	uv "github.com/Chaos-19/Alumni-Student-Networking-Portal/view/user"
	"github.com/gin-gonic/gin"
	"github.com/golang-migrate/migrate/v4"
	_ "github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
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
	conn, err := gorm.Open(postgres.Open(url), &gorm.Config{
		SkipDefaultTransaction: true,
	})

	if err != nil {
		return nil, err
	}

	return conn, nil
}

func NewStorage(db *gorm.DB) storage.Storage {
	return storage.Storage{User: user.NewUserStorage(db)}
}

func NewModule(s storage.Storage) module.Module {
	return module.Module{User: um.NewUserModule(s.User, "")}
}

func NewView(m module.Module) view.View {
	return view.View{User: uv.NewUserView(m.User)}
}

func main() {
	db, err := NewDB(os.Getenv("DB_DSN"))
	if err != nil {
		log.Fatal("unable to start db", err)
	}

	// run migration
	_ = InitiateMigration("/sql/schemas", os.Getenv("DB_DSN"))

	// init basic service
	storage := NewStorage(db)
	module := NewModule(storage)
	view := NewView(module)

	r := gin.Default()
	v1 := r.Group("/v1")

	v1.POST("/users", view.User.CreateUser)
	v1.POST("/users/login")

	err = r.Run(":8081")
	if err != nil {
		log.Fatal("error starting the server", err)
	}
}
