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
	GetMentorships(ctx context.Context) ([]models.MentorshipList, error)
	GetMentorship(ctx context.Context, mp *models.Mentorship) error
	UpdateMentorship(ctx context.Context, mp *models.Mentorship) error
}

type Discussion interface {
	CreateQuestion(ctx context.Context, dp *models.Discussion) error
	GetDiscussion(ctx context.Context, dp *models.Discussion) (*models.DiscussionWithReplies, error)
	AnswerDiscussion(ctx context.Context, dp *models.DiscussionReply) error
	GetDiscussions(ctx context.Context) ([]models.DiscussionWithReplies, error)
}

type Storage struct {
	User       User
	Mentorship Mentorship
	Discussion Discussion
}
