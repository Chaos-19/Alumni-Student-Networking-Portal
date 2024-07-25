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

type MentorshipList struct {
	Name      string    `gorm:"column:name" json:"name"`
	FirstName string    `gorm:"column:first_name" json:"first_name"`
	Skill     string    `gorm:"column:skill" json:"skill"`
	CreatedAt time.Time `gorm:"column:created_at" json:"created_at"`
}

type MentorshipSystemList struct {
	ID          string         `gorm:"type:uuid;primaryKey" json:"id"`
	Name        string         `gorm:"type:varchar(255);not null" json:"name"`
	Description string         `gorm:"type:text" json:"description"`
	Skill       string         `gorm:"type:varchar(255)" json:"skill"`                           // Skill field
	CreatedAt   time.Time      `gorm:"type:timestamp with time zone;not null" json:"created_at"` // CreatedAt field
	Uploads     pq.StringArray `gorm:"type:text[]" json:"uploads"`                               // Array of strings for uploads
	Links       pq.StringArray `gorm:"type:text[]" json:"links"`                                 // Array of strings for links
	FirstName   string         `json:"first_name"`
}
