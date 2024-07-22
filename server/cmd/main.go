package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/golang-migrate/migrate/v4"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func InitiateMigration(path, conn string) *migrate.Migrate {

	m, err := migrate.New(fmt.Sprintf("file://%s", path), conn)
	log.Println(context.Background(), "connection "+conn+" "+path)

	if err != nil {
		log.Fatal("could not create migrator")
	}

	return m
}

func UpMigration(m *migrate.Migrate) {
	err := m.Up()
	if err != nil && err != migrate.ErrNoChange {
		log.Fatal("could not migrate")
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

func main() {
	_, err := NewDB(os.Getenv("DB_DSN"))
	if err != nil {
		log.Fatal("unable to start db", err)
	}

	log.Println("test connection success")
}
