package models

import (
	"time"

	"github.com/google/uuid"
)

type Question struct {
	ContentCategory string `json:"contentCatagory"` // Ensure correct spelling
	Title           string `json:"title"`
	Question        string `json:"question"`
	Published       bool   `json:"published"`
	UserID          uuid.UUID
}

type Discussion struct {
	ID           uuid.UUID `gorm:"type:uuid;primaryKey" json:"id"`
	Category     string    `gorm:"type:varchar(255);not null" json:"category"`
	Title        string    `gorm:"type:varchar(255);not null" json:"title"`
	Question     string    `gorm:"type:text;not null" json:"question"`
	CreatedBy    uuid.UUID `gorm:"type:uuid;not null;index" json:"created_by"`
	IsPublished  bool      `gorm:"type:bool;not null;default:false" json:"is_published"`
	Answered     bool      `gorm:"type:bool;not null;default:false" json:"answered"`
	BlockReplies bool      `gorm:"type:bool;not null;default:false" json:"block_replies"`
	CreatedAt    time.Time `gorm:"type:timestamp with time zone;not null;default:now()" json:"created_at"`
	UpdatedAt    time.Time `gorm:"type:timestamp with time zone;not null;default:now()" json:"updated_at"`

	// Associations
	User    User              `gorm:"foreignKey:CreatedBy;references:ID" json:"user,omitempty"`
	Replies []DiscussionReply `gorm:"foreignKey:DiscussionID;references:ID" json:"replies,omitempty"`
}

type DiscussionReply struct {
	ID           uuid.UUID `gorm:"type:uuid;primaryKey" json:"id"`
	DiscussionID uuid.UUID `gorm:"type:uuid;not null;index" json:"discussion_id"`
	Answer       string    `gorm:"type:text;not null" json:"answer"`
	CreatedBy    uuid.UUID `gorm:"type:uuid;not null;index" json:"created_by"`
	CreatedAt    time.Time `gorm:"type:timestamp with time zone;not null;default:now()" json:"created_at"`
	UpdatedAt    time.Time `gorm:"type:timestamp with time zone;not null;default:now()" json:"updated_at"`

	// Associations
	Discussion Discussion `gorm:"foreignKey:DiscussionID;references:ID" json:"discussion,omitempty"`
	User       User       `gorm:"foreignKey:CreatedBy;references:ID" json:"user,omitempty"`
}

type DiscussionWithReplies struct {
	Discussion
	Replies []DiscussionReply `json:"replies"`
}
