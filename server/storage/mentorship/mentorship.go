package mentorship

import (
	"context"
	"fmt"
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

func (m *mentorshipStorage) GetMentorships(ctx context.Context) ([]models.MentorshipList, error) {
	result := []models.MentorshipList{}
	err := m.db.Raw("select m.name, u.first_name, m.skill, m.created_at from mentorships m join users u on u.id = m.created_by").Scan(&result).Error
	if err != nil {
		log.Println("unable to get mentorship list", err)
		return nil, fmt.Errorf("unable to get mentorship list")
	}

	return result, nil
}

func (m *mentorshipStorage) GetMentorshipsForSystem(ctx context.Context) ([]models.MentorshipSystemList, error) {
	result := []models.MentorshipSystemList{}
	err := m.db.Raw("select m.id, m.name, m.description,m.skill, m.created_at, array_agg(mf.file_name)::text[] as uploads,  m.links::text[], u.first_name from mentorships m join mentorship_files mf on mf.mentorship_id = m.id join users u on u.id = m.created_by group by m.id, u.first_name").Scan(&result).Error
	if err != nil {
		log.Println("unable to get mentorship list", err)
		return nil, fmt.Errorf("unable to get mentorship list")
	}

	return result, nil
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
