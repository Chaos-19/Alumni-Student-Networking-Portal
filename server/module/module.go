package module

import (
	"context"

	"github.com/Chaos-19/Alumni-Student-Networking-Portal/models"
)

type User interface {
	CreateUser(ctx context.Context, u models.SignUpForm) (models.User, error)
	Login(ctx context.Context, lr models.SignIn) (models.SignInResponse, error)
}

type Module struct {
	User User
}
