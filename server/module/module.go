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
	GetMentorships(ctx context.Context) ([]models.MentorshipList, error)
	GetMentorship(ctx context.Context, mp *models.Mentorship) error
	UpdateMentorship(ctx context.Context, mp *models.Mentorship) error
	GetMentorshipsForSystem(ctx context.Context) ([]models.MentorshipSystemList, error)
}

type Discussion interface {
	CreateQuestion(ctx context.Context, dp *models.Question) error
	GetDiscussion(ctx context.Context, dp *models.Discussion) (*models.DiscussionWithReplies, error)
	GetDiscussions(ctx context.Context) ([]models.DiscussionWithReplies, error)
	AnswerDiscussion(ctx context.Context, dp *models.DiscussionReply) error
}

type Module struct {
	User       User
	Mentorship Mentorship
	Discussion Discussion
}
