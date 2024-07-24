package user

import (
	"log"
	"net/http"

	"github.com/Chaos-19/Alumni-Student-Networking-Portal/models"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/module"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/view"
	"github.com/gin-gonic/gin"
)

type userView struct {
	user module.User
}

func NewUserView(u module.User) view.User {
	return &userView{user: u}
}

func (u *userView) CreateUser(ctx *gin.Context) {

	var usr models.SignUpForm
	err := ctx.ShouldBind(&usr)
	if err != nil {
		log.Println("unable to bind to user signup data", err)
		ctx.JSON(http.StatusBadRequest, "invalid request object")
		return
	}

	resp, err := u.user.CreateUser(ctx, usr)
	if err != nil {
		log.Println("unable to create user", err)
		ctx.JSON(http.StatusInternalServerError, "invalid request object")
		return
	}

	ctx.JSON(http.StatusOK, view.SuccessResponse(resp))
}

func (u *userView) Login(ctx *gin.Context) {
	var lr models.SignIn
	err := ctx.ShouldBind(&lr)
	if err != nil {
		log.Println("unable to bind to user sign in data", err)
		ctx.JSON(http.StatusBadRequest, "invalid request object")
		return
	}

	resp, err := u.user.Login(ctx, lr)
	if err != nil {
		log.Println("unable to bind to user sign in data", err)
		ctx.JSON(http.StatusInternalServerError, "invalid request object")
		return
	}

	ctx.JSON(http.StatusOK, view.SuccessResponse(resp))
}
