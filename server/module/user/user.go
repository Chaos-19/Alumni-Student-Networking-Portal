package user

import (
	"context"
	"time"

	"github.com/Chaos-19/Alumni-Student-Networking-Portal/models"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/module"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/storage"
	"golang.org/x/crypto/bcrypt"
)

type userModule struct {
	userStorage storage.User
}

func NewUserModule(us storage.User) module.User {
	return &userModule{userStorage: us}
}

func (u *userModule) CreateUser(ctx context.Context, up models.SignUpForm) (models.User, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(up.Password), 8)
	if err != nil {
		return models.User{}, err
	}

	usr := &models.User{
		FirstName:    up.FirstName,
		LastName:     "",
		Email:        up.Email,
		PasswordHash: string(bytes),
		CreatedAt:    time.Now(),
	}

	err = u.userStorage.CreateUser(ctx, usr)
	if err != nil {
		return models.User{}, err
	}

	return *usr, nil
}
