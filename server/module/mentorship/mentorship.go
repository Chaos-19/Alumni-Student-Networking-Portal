package mentorship

import (
	"context"
	"fmt"

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

func (m *mentorshipModule) GetMentorshipsForSystem(ctx context.Context) ([]models.MentorshipSystemList, error) {
	res, err := m.mentorshipStorage.GetMentorshipsForSystem(ctx)
	if err != nil {
		return nil, err
	}
	for i := 0; i < len(res); i++ {
		for j := 0; j < len(res[i].Uploads); j++ {
			res[i].Uploads[j] = fmt.Sprintf("http://localhost:8081/v1/uploads/%s", res[i].Uploads[j])
		}
	}

	return res, nil
}

func (m *mentorshipModule) GetMentorship(ctx context.Context, mp *models.Mentorship) error {
	return nil
}

func (m *mentorshipModule) UpdateMentorship(ctx context.Context, mp *models.Mentorship) error {
	return nil
}
