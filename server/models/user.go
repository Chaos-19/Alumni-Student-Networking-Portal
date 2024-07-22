package models

import (
	"time"

	"github.com/google/uuid"
)

type User struct {
	ID           uuid.UUID `json:"id"`
	FirstName    string    `json:"first_name"`
	LastName     string    `json:"last_name"`
	Email        string    `json:"email"`
	PasswordHash string    `json:"password_hash"`
	CreatedAt    time.Time `json:"created_at"`
	UpdatedAt    time.Time `json:"updated_at"`
}

type SignUpForm struct {
	FirstName       string `json:"firstName"`
	LastName        string `json:"lastName"`
	Email           string `json:"email"`
	Password        string `json:"password"`
	ConfirmPassword string `json:"confirmPassword"`
}

// func signUpHandler(w http.ResponseWriter, r *http.Request) {
// 	var form SignUpForm

// 	if err := json.NewDecoder(r.Body).Decode(&form); err != nil {
// 		http.Error(w, err.Error(), http.StatusBadRequest)
// 		return
// 	}

// 	// Validate passwords match
// 	if form.Password != form.confirmPassword {
// 		http.Error(w, "Passwords do not match", http.StatusBadRequest)
// 		return
// 	}

// 	// Hash the password (this is a placeholder, use a proper hashing function)
// 	passwordHash := hashPassword(form.Password)

// 	// Create a new user
// 	user := User{
// 		ID:           uuid.New(),
// 		FirstName:    form.FirstName,
// 		LastName:     form.LastName,
// 		Email:        form.Email,
// 		PasswordHash: passwordHash,
// 		CreatedAt:    time.Now(),
// 		UpdatedAt:    time.Now(),
// 	}

// 	// TODO: Save the user to the database

// 	// Respond with the created user (excluding the password hash)
// 	responseUser := user
// 	responseUser.PasswordHash = ""
// 	w.WriteHeader(http.StatusCreated)
// 	json.NewEncoder(w).Encode(responseUser)
// }

// func hashPassword(password string) string {
// 	// TODO: Implement proper password hashing
// 	return password // Placeholder
// }

// func main() {
// 	http.HandleFunc("/signup", signUpHandler)
// 	http.ListenAndServe(":8080", nil)
// }
