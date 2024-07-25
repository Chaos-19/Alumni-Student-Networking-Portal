package discussion

import (
	"context"
	"time"

	"github.com/Chaos-19/Alumni-Student-Networking-Portal/models"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/module"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/storage"
)

type discussionModule struct {
	discussionStorage storage.Discussion
}

func NewDiscussionModule(d storage.Discussion) module.Discussion {
	return &discussionModule{discussionStorage: d}
}

func (d *discussionModule) CreateQuestion(ctx context.Context, dp *models.Question) error {
	return d.discussionStorage.CreateQuestion(ctx, &models.Discussion{
		Category:     dp.ContentCategory,
		Title:        dp.Title,
		Question:     dp.Question,
		CreatedBy:    dp.UserID,
		IsPublished:  dp.Published,
		Answered:     false,
		BlockReplies: false,
		CreatedAt:    time.Now(),
		UpdatedAt:    time.Time{},
	})
}

func (d *discussionModule) GetDiscussion(ctx context.Context, dp *models.Discussion) (*models.DiscussionWithReplies, error) {
	return d.discussionStorage.GetDiscussion(ctx, dp)
}

func (d *discussionModule) AnswerDiscussion(ctx context.Context, dp *models.DiscussionReply) error {
	return d.discussionStorage.AnswerDiscussion(ctx, dp)
}

func (d *discussionModule) GetDiscussions(ctx context.Context) ([]models.DiscussionWithReplies, error) {
	return d.discussionStorage.GetDiscussions(ctx)
}
