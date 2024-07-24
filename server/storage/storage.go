package storage

import (
	"context"

	"github.com/Chaos-19/Alumni-Student-Networking-Portal/models"
)

type User interface {
	CreateUser(ctx context.Context, up *models.User) error
	GetUser(ctx context.Context, up *models.User) error
}

type Mentorship interface {
	CreateMentorship(ctx context.Context, mp *models.Mentorship) error
	GetMentorships(ctx context.Context) ([]models.Mentorship, error)
	GetMentorship(ctx context.Context, mp *models.Mentorship) error
	UpdateMentorship(ctx context.Context, mp *models.Mentorship) error
}

type Storage struct {
	User       User
	Mentorship Mentorship
}
