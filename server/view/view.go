package view

import (
	"fmt"
	"net/http"
	"path/filepath"

	"github.com/gin-gonic/gin"
)

type View struct {
	User       User
	Mentorship Mentorship
}

type User interface {
	CreateUser(ctx *gin.Context)
	Login(ctx *gin.Context)
}

type Mentorship interface {
	CreateMentorship(ctx *gin.Context)
	ApproveMentorship(ctx *gin.Context)
}

func SuccessResponse(resp any) gin.H {
	return gin.H{"ok": true, "data": resp}
}

func ErrorResponse(resp any) gin.H {
	return gin.H{"ok": true, "error": resp}
}

func (v *View) FileUpload(c *gin.Context) {
	form, err := c.MultipartForm()
	if err != nil {
		c.String(http.StatusBadRequest, fmt.Sprintf("Error reading multipart form: %s", err.Error()))
		return
	}

	files := form.File["files"]
	for _, file := range files {
		dst := filepath.Join("/uploads", file.Filename)
		if err := c.SaveUploadedFile(file, dst); err != nil {
			c.String(http.StatusInternalServerError, fmt.Sprintf("Error saving file: %s", err.Error()))
			return
		}
	}

	c.String(http.StatusOK, fmt.Sprintf("Successfully uploaded %d files", len(files)))
}
