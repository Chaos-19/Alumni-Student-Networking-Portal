package storage

import (
	"context"

	"github.com/Chaos-19/Alumni-Student-Networking-Portal/models"
	"gorm.io/gorm"
)

type User interface {
	CreateUser(ctx context.Context, up *models.User) error
}

type Storage struct {
	User User
}

func NewStorage(db *gorm.DB) Storage {
	return Storage{}
}
