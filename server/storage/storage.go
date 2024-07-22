package storage

import (
	"context"

	"github.com/Chaos-19/Alumni-Student-Networking-Portal/models"
)

type User interface {
	CreateUser(ctx context.Context, up *models.User) error
}

type Storage struct {
	User User
}
