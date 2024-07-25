package discussion

import (
	"log"
	"net/http"

	"github.com/Chaos-19/Alumni-Student-Networking-Portal/models"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/module"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/view"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type discussionView struct {
	discussionModule module.Discussion
}

func NewMentorshipViewView(d module.Discussion) view.Discussion {
	return &discussionView{discussionModule: d}
}

func (d *discussionView) CreateQuestion(ctx *gin.Context) {
	// Retrieve uploadType from form data
	userID := ctx.Request.Header.Get("x-user-id")
	uID, err := uuid.Parse(userID)
	if err != nil {
		log.Println("unable to parse user ID", err)
		ctx.JSON(http.StatusBadRequest, view.ErrorResponse("invalid user ID"))
		return
	}

	var q models.Question
	err = ctx.ShouldBind(&q)
	if err != nil {
		log.Println("unable to bind to question body", err)
		ctx.JSON(http.StatusBadRequest, "invalid request object")
		return
	}

	q.UserID = uID

	err = d.discussionModule.CreateQuestion(ctx, &q)
	if err != nil {
		log.Println("unable to bind to question body", err)
		ctx.JSON(http.StatusInternalServerError, view.ErrorResponse("unable to create discussion"))
		return
	}

	ctx.JSON(http.StatusOK, view.SuccessResponse("discussion created successfully!"))
}

func (d *discussionView) GetQuestions(ctx *gin.Context) {
	resp, err := d.discussionModule.GetDiscussions(ctx)
	if err != nil {
		log.Println("unable to get questions", err)
		ctx.JSON(http.StatusInternalServerError, view.ErrorResponse("unable to get questions"))
		return
	}

	ctx.JSON(http.StatusOK, view.SuccessResponse(resp))
}

func (d *discussionView) AnswerQuestion(ctx *gin.Context) {
	// Retrieve uploadType from form data
	userID := ctx.Request.Header.Get("x-user-id")
	uID, err := uuid.Parse(userID)
	if err != nil {
		log.Println("unable to parse user ID", err)
		ctx.JSON(http.StatusBadRequest, view.ErrorResponse("invalid user ID"))
		return
	}

	dID, err := uuid.Parse(ctx.Param("id"))
	if err != nil {
		log.Println("unable to parse discussion ID", err)
		ctx.JSON(http.StatusBadRequest, view.ErrorResponse("invalid discussion ID"))
		return
	}

	var q models.DiscussionReply
	err = ctx.ShouldBind(&q)
	if err != nil {
		log.Println("unable to bind to question answer", err)
		ctx.JSON(http.StatusBadRequest, "invalid request object")
		return
	}
	q.CreatedBy = uID
	q.DiscussionID = dID

	err = d.discussionModule.AnswerDiscussion(ctx, &q)
	if err != nil {
		log.Println("unable to store answer", err)
		ctx.JSON(http.StatusInternalServerError, "internal server error")
		return
	}

	ctx.JSON(http.StatusOK, view.SuccessResponse("answer submitted!"))
}

func (d *discussionView) GetUserQuestion(ctx *gin.Context) {

}
