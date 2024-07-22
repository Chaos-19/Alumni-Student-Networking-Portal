package user

import (
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/view"
	"github.com/gin-gonic/gin"
)

type userView struct{}

func NewUserView() view.User {
	return &userView{}
}

func (u *userView) CreateUser(ctx *gin.Context) {

}
