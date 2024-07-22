package view

import "github.com/gin-gonic/gin"

type View struct {
	User User
}

type User interface {
	CreateUser(ctx *gin.Context)
}

func NewView() View {
	return View{}
}
