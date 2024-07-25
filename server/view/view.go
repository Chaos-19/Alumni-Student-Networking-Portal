package view

import (
	"github.com/gin-gonic/gin"
)

type View struct {
	User       User
	Mentorship Mentorship
	Discussion Discussion
}

type User interface {
	CreateUser(ctx *gin.Context)
	Login(ctx *gin.Context)
}

type Mentorship interface {
	CreateMentorship(ctx *gin.Context)
	ApproveMentorship(ctx *gin.Context)
	GetMentorships(ctx *gin.Context)
	GetMentorshipsForSystem(ctx *gin.Context)
}

type Discussion interface {
	CreateQuestion(ctx *gin.Context)
	GetUserQuestion(ctx *gin.Context)
	GetQuestions(ctx *gin.Context)
	AnswerQuestion(ctx *gin.Context)
}

func SuccessResponse(resp any) gin.H {
	return gin.H{"ok": true, "data": resp}
}

func ErrorResponse(resp any) gin.H {
	return gin.H{"ok": true, "error": resp}
}
