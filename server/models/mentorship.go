package models

import (
	"time"

	"github.com/google/uuid"
	"github.com/lib/pq"
)

type Mentorship struct {
	ID             uuid.UUID        `json:"id" gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	Name           string           `json:"name"`
	Description    string           `json:"description"`
	About          string           `json:"about"`
	Length         string           `json:"length"`
	Languages      string           `json:"languages"`
	Links          pq.StringArray   `json:"links" gorm:"type:text[]"`
	Captions       bool             `json:"captions"`
	Skill          string           `json:"skill"`
	CreatedBy      uuid.UUID        `json:"created_by"`
	CreatedAt      time.Time        `json:"created_at"`
	UpdatedAt      time.Time        `json:"updated_at"`
	MentorshipFile []MentorshipFile `json:"mentorship_file" gorm:"foreignKey:MentorshipID"`
}

type MentorshipFile struct {
	ID           uuid.UUID `json:"id" gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	MentorshipID uuid.UUID `json:"mentorship_id" `
	FileName     string    `json:"file_name" `
	FileSize     int64     `json:"file_size" `
	FileType     string    `json:"file_type" `
	Status       string    `json:"status" `
	CreatedAt    time.Time `json:"created_at" `
	UpdatedAt    time.Time `json:"updated_at" `
}

type MentorshipParticipants struct {
	ID           uuid.UUID `json:"id" gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	MentorshipID uuid.UUID `json:"mentorship_id" `
	Registrant   uuid.UUID `json:"registrant" `
	CreatedAt    time.Time `json:"created_at" `
}
