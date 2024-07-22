package user

import (
	"context"

	"github.com/Chaos-19/Alumni-Student-Networking-Portal/models"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/module"
)

type userModule struct {
}

func NewUserModule() module.User {
	return &userModule{}
}

func (u *userModule) CreateUser(ctx context.Context, up models.SignUpForm) (models.User, error) {
	return models.User{}, nil
}
