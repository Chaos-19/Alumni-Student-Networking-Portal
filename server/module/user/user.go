package user

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/Chaos-19/Alumni-Student-Networking-Portal/models"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/module"
	"github.com/Chaos-19/Alumni-Student-Networking-Portal/storage"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

type userModule struct {
	userStorage storage.User
	secretKey   string
}

func NewUserModule(us storage.User, secretKey string) module.User {
	return &userModule{userStorage: us, secretKey: secretKey}
}

func (u *userModule) CreateUser(ctx context.Context, up models.SignUpForm) (models.User, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(up.Password), bcrypt.DefaultCost)
	if err != nil {
		return models.User{}, err
	}

	usr := &models.User{
		FirstName:    up.FirstName,
		LastName:     "",
		Email:        up.Email,
		PasswordHash: string(bytes),
		CreatedAt:    time.Now(),
	}

	err = u.userStorage.CreateUser(ctx, usr)
	if err != nil {
		return models.User{}, err
	}

	return *usr, nil
}

// HashPassword generates a bcrypt hash of the password.
func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 8)
	return string(bytes), err
}

// CheckPasswordHash compares the hashed password with the plain password.
func CheckPasswordHash(hash, password string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	log.Println("mismatch password", err)
	return err == nil
}

func (u *userModule) Login(ctx context.Context, lr models.SignIn) (models.SignInResponse, error) {
	usr := &models.User{Email: lr.Email}
	err := u.userStorage.GetUser(ctx, usr)
	if err != nil {
		log.Println("unable to find user", err)
		return models.SignInResponse{}, fmt.Errorf("unable to find user")
	}

	if !CheckPasswordHash(usr.PasswordHash, lr.Password) {
		log.Println("invalid password", lr.Password, usr.PasswordHash)
		return models.SignInResponse{}, fmt.Errorf("incorrect username or password")
	}

	ac, err := u.Generate(&models.UserClaims{
		RegisteredClaims: jwt.RegisteredClaims{
			Issuer:  "ALUMNI",
			Subject: "BDU",
		},
		UserID: usr.ID.String(),
	})
	if err != nil {
		log.Println("invalid password", lr.Password, usr.PasswordHash)
		return models.SignInResponse{}, fmt.Errorf("internal server error")
	}

	return models.SignInResponse{
		UserID:      usr.ID.String(),
		AccessToken: ac,
	}, nil
}

func (u *userModule) Generate(userClaims *models.UserClaims) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, userClaims)
	tk, err := token.SignedString([]byte(u.secretKey))
	if err != nil {
		return "", fmt.Errorf("")
	}
	return tk, nil
}

func (u *userModule) Verify(accessToken string) (*models.UserClaims, error) {
	if accessToken == "" {
		return nil, fmt.Errorf("empty access token")
	}

	token, err := jwt.ParseWithClaims(
		accessToken,
		&models.UserClaims{},
		func(token *jwt.Token) (interface{}, error) {
			_, ok := token.Method.(*jwt.SigningMethodHMAC)
			if !ok {
				return nil, fmt.Errorf("invalid token")
			}

			return []byte(u.secretKey), nil
		},
	)

	if err != nil {
		log.Println("unable to verify token", err)
		return nil, fmt.Errorf("invalid token")
	}

	claims, ok := token.Claims.(*models.UserClaims)
	if !ok {
		return nil, fmt.Errorf("invalid token")
	}

	return claims, nil
}
