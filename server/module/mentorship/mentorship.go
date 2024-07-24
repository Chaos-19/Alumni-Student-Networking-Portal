package mentorship

import (
	"context"

	"github.com/Chaos-19/Alumni-Student-Networking-Portal/models"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/module"
)

type mentorshipModule struct {
	mentorshipModule module.Mentorship
}

func NewMentorshipModule(m module.Mentorship) module.Mentorship {
	return &mentorshipModule{mentorshipModule: m}
}

func (m *mentorshipModule) CreateMentorship(ctx context.Context, mp *models.Mentorship) error {
	return m.mentorshipModule.CreateMentorship(ctx, mp)
}

func (m *mentorshipModule) GetMentorships(ctx context.Context) ([]models.Mentorship, error) {
	return nil, nil
}

func (m *mentorshipModule) GetMentorship(ctx context.Context, mp *models.Mentorship) error {
	return nil
}

func (m *mentorshipModule) UpdateMentorship(ctx context.Context, mp *models.Mentorship) error {
	return nil
}
