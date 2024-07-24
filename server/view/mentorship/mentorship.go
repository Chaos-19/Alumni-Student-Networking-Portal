package mentorship

import (
	"fmt"
	"log"
	"net/http"
	"path/filepath"
	"time"

	"github.com/Chaos-19/Alumni-Student-Networking-Portal/models"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/module"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/view"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type mentorshipView struct {
	mentorshipModule module.Mentorship
}

func NewMentorshipViewView(u module.Mentorship) view.Mentorship {
	return &mentorshipView{mentorshipModule: u}
}

func (m *mentorshipView) CreateMentorship(ctx *gin.Context) {
	// Retrieve uploadType from form data
	userID := ctx.Request.Header.Get("x-user-id")
	uID, err := uuid.Parse(userID)
	if err != nil {
		log.Println("unable to parse user ID", err)
		ctx.JSON(http.StatusBadRequest, view.ErrorResponse("invalid user ID"))
		return
	}

	form, err := ctx.MultipartForm()
	if err != nil {
		log.Println("unable to get uploaded files", err)
		ctx.JSON(http.StatusBadRequest, view.ErrorResponse(err))
		return
	}

	// Extract form values
	title := form.Value["title"]
	videoDescription := form.Value["videoDescription"]
	programSummary := form.Value["programSummary"]
	externalLinks := form.Value["externalLinks"]
	// menteesQuota := form.Value["menteesQuota"]

	// // Parse menteesQuota to integer
	// menteesQuotaInt, err := strconv.Atoi(menteesQuota[0])
	// if err != nil {
	// 	log.Println("invalid menteesQuota", err)
	// 	ctx.JSON(http.StatusBadRequest, view.ErrorResponse("invalid menteesQuota"))
	// 	return
	// }

	files := form.File["files"]
	mf := make([]models.MentorshipFile, 0, len(files))
	for _, file := range files {
		dst := filepath.Join("/uploads", file.Filename)
		if err := ctx.SaveUploadedFile(file, dst); err != nil {
			ctx.String(http.StatusInternalServerError, fmt.Sprintf("Error saving file: %s", err.Error()))
			return
		}

		mp := models.MentorshipFile{
			FileName:  file.Filename,
			FileSize:  file.Size,
			Status:    "ADDED",
			CreatedAt: time.Now(),
		}

		mf = append(mf, mp)
	}

	// Create mentorship record
	mrp := models.Mentorship{
		Name:           title[0],
		Description:    videoDescription[0],
		About:          programSummary[0],
		Length:         "",
		Languages:      "",
		Links:          externalLinks,
		Captions:       false,
		Skill:          "",
		CreatedBy:      uID,
		CreatedAt:      time.Now(),
		UpdatedAt:      time.Now(),
		MentorshipFile: mf,
	}

	err = m.mentorshipModule.CreateMentorship(ctx, &mrp)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, view.ErrorResponse("unable to save mentorship meta data"))
		return
	}

	ctx.JSON(http.StatusOK, view.SuccessResponse("mentorship created successfully"))
}

func (m *mentorshipView) ApproveMentorship(ctx *gin.Context) {

}
