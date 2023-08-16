package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/rs/cors"
)

func main() {
	fmt.Println("Starting Server")

	mux := http.NewServeMux()

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte("home"))
	})

	handler := cors.Default().Handler(mux)

	if err := http.ListenAndServe(":8080", handler); err != nil {
		log.Fatal(err)
	}

}
