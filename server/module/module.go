package module

import (
	"context"

	"github.com/Chaos-19/Alumni-Student-Networking-Portal/models"
)

type User interface {
	CreateUser(ctx context.Context, u models.SignUpForm) (models.User, error)
	Login(ctx context.Context, lr models.SignIn) (models.SignInResponse, error)
}

type Mentorship interface {
	CreateMentorship(ctx context.Context, mp *models.Mentorship) error
	GetMentorships(ctx context.Context) ([]models.Mentorship, error)
	GetMentorship(ctx context.Context, mp *models.Mentorship) error
	UpdateMentorship(ctx context.Context, mp *models.Mentorship) error
}

type Module struct {
	User       User
	Mentorship Mentorship
}
