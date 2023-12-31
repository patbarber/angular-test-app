package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/rs/cors"
)

type Todo struct {
	Id   string
	Item string
}

func main() {
	fmt.Println("Starting Server")

	todoItem := `[{"id": "1", "item": "new item"},{"id": "2", "item": "new item2"}]`
	var item []Todo
	json.Unmarshal([]byte(todoItem), &item)
	fmt.Printf("Unmarshaled item []: %s\r\n", item)

	newData, err := json.Marshal(item)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Printf("marshalled json = %s\r\n", string(newData))
	}

	mux := http.NewServeMux()

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte("home"))
	})

	mux.HandleFunc("/getList", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte(newData))
	})

	handler := cors.Default().Handler(mux)

	if err := http.ListenAndServe(":8080", handler); err != nil {
		log.Fatal(err)
	}

}
