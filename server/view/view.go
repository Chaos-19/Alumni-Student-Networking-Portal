package view

import (
	"github.com/gin-gonic/gin"
)

type View struct {
	User User
}

type User interface {
	CreateUser(ctx *gin.Context)
}

func SuccessResponse(resp any) gin.H {
	return gin.H{"ok": true, "data": resp}
}
