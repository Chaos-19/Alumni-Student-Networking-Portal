package mentorship

import (
	"context"

	"github.com/Chaos-19/Alumni-Student-Networking-Portal/models"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/module"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/storage"
)

type mentorshipModule struct {
	mentorshipStorage storage.Mentorship
}

func NewMentorshipModule(m storage.Mentorship) module.Mentorship {
	return &mentorshipModule{mentorshipStorage: m}
}

func (m *mentorshipModule) CreateMentorship(ctx context.Context, mp *models.Mentorship) error {
	return m.mentorshipStorage.CreateMentorship(ctx, mp)
}

func (m *mentorshipModule) GetMentorships(ctx context.Context) ([]models.MentorshipList, error) {
	return m.mentorshipStorage.GetMentorships(ctx)
}

func (m *mentorshipModule) GetMentorship(ctx context.Context, mp *models.Mentorship) error {
	return nil
}

func (m *mentorshipModule) UpdateMentorship(ctx context.Context, mp *models.Mentorship) error {
	return nil
}
