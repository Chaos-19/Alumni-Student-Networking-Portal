package discussion

import (
	"context"
	"time"

	"github.com/Chaos-19/Alumni-Student-Networking-Portal/models"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/storage"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type discussionStorage struct {
	db *gorm.DB
}

func NewDiscussionStorage(db *gorm.DB) storage.Discussion {
	return &discussionStorage{db: db}
}

func (d *discussionStorage) CreateQuestion(ctx context.Context, dp *models.Discussion) error {
	dp.ID = uuid.New()
	dp.CreatedAt = time.Now()
	dp.UpdatedAt = time.Now()

	if err := d.db.WithContext(ctx).Create(dp).Error; err != nil {
		return err
	}

	return nil
}

func (d *discussionStorage) GetDiscussion(ctx context.Context, dp *models.Discussion) (*models.DiscussionWithReplies, error) {
	var discussionWithReplies models.DiscussionWithReplies

	if err := d.db.WithContext(ctx).
		Preload("Replies").
		Preload("User").
		First(&discussionWithReplies.Discussion, "id = ?", dp.ID).Error; err != nil {
		return nil, err
	}
	return &discussionWithReplies, nil
}

func (d *discussionStorage) AnswerDiscussion(ctx context.Context, dp *models.DiscussionReply) error {
	dp.ID = uuid.New()
	dp.CreatedAt = time.Now()
	dp.UpdatedAt = time.Now()

	if err := d.db.WithContext(ctx).Create(dp).Error; err != nil {
		return err
	}

	// Mark the discussion as answered
	if err := d.db.WithContext(ctx).
		Model(&models.Discussion{}).
		Where("id = ?", dp.DiscussionID).
		Update("answered", true).Error; err != nil {
		return err
	}

	return nil
}

func (d *discussionStorage) GetDiscussions(ctx context.Context) ([]models.DiscussionWithReplies, error) {
	var discussions []models.Discussion
	var discussionsWithReplies []models.DiscussionWithReplies

	// Fetch all discussions with their replies and user details
	if err := d.db.WithContext(ctx).
		Preload("Replies").
		Preload("User").
		Find(&discussions).Error; err != nil {
		return nil, err
	}

	// Convert discussions to discussions with replies
	for _, discussion := range discussions {
		discussionsWithReplies = append(discussionsWithReplies, models.DiscussionWithReplies{
			Discussion: discussion,
			Replies:    discussion.Replies,
		})
	}

	return discussionsWithReplies, nil
}
