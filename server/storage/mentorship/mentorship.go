package mentorship

import (
	"context"
	"log"

	"github.com/Chaos-19/Alumni-Student-Networking-Portal/models"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/storage"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type mentorshipStorage struct {
	db *gorm.DB
}

func NewMentorshipStorage(db *gorm.DB) storage.Mentorship {
	return &mentorshipStorage{db: db}
}

func (m *mentorshipStorage) CreateMentorship(ctx context.Context, mp *models.Mentorship) error {
	err := m.db.Model(&models.Mentorship{}).Create(&mp).Error
	if err != nil {
		log.Println(err)
		return err
	}

	for _, v := range mp.MentorshipFile {
		v.ID = uuid.New()
		v.MentorshipID = mp.ID
		err := m.db.Model(&models.MentorshipFile{}).Create(&v).Error
		if err != nil {
			log.Println("unable to save assets")
			return err
		}
	}

	return nil
}

func (m *mentorshipStorage) GetMentorships(ctx context.Context) ([]models.Mentorship, error) {
	result := []models.Mentorship{}
	m.db.Model(&models.Mentorship{}).Find(&result, "status = ?", "ADDED")
	return nil, nil
}

func (m *mentorshipStorage) GetApprovedMentorships(ctx context.Context) ([]models.Mentorship, error) {
	return nil, nil
}

func (m *mentorshipStorage) GetMentorship(ctx context.Context, mp *models.Mentorship) error {
	return nil
}

func (m *mentorshipStorage) UpdateMentorship(ctx context.Context, mp *models.Mentorship) error {
	return nil
}
