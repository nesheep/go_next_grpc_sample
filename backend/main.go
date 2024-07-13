package main

import (
	"fmt"
	"log"
	"net"
	"os"
	"os/signal"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	"mygrpc/database"
	"mygrpc/gen/pb"
	"mygrpc/greeting"
	"mygrpc/todo"
)

func main() {
	db, err := database.NewDB()
	if err != nil {
		panic(err)
	}

	if err := database.InitDB(db); err != nil {
		panic(err)
	}

	port := 8080
	listener, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		panic(err)
	}

	s := grpc.NewServer()
	reflection.Register(s)

	pb.RegisterGreetingServiceServer(s, greeting.NewServer())
	pb.RegisterTodoServiceServer(s, todo.NewServer(db))

	go func() {
		log.Printf("start gRPC server port: %v", port)
		s.Serve(listener)
	}()

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt)
	<-quit
	log.Println("stopping gRPC server...")
	s.GracefulStop()
}
