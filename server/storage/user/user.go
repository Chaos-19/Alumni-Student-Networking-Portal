package user

import (
	"context"
	"fmt"

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

func (u *userStorage) GetUser(ctx context.Context, up *models.User) error {
	rows := u.db.Model(&models.User{}).Find(&up, "id = ? or email = ?", up.ID, up.Email)
	if rows.Error != nil {
		return rows.Error
	}

	if rows.RowsAffected == 0 {
		return fmt.Errorf("unable to find user")
	}

	return nil
}
