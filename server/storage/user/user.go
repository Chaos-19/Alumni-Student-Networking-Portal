package user

import (
	"context"

	"github.com/Chaos-19/Alumni-Student-Networking-Portal/models"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/storage"
	"gorm.io/gorm"
)

type userStorage struct {
	db *gorm.DB
}

func NewUserStorage(db *gorm.DB) storage.User {
	return &userStorage{db: db}
}

func (u *userStorage) CreateUser(ctx context.Context, up *models.User) error {
	return u.db.Create(&up).Error
}
