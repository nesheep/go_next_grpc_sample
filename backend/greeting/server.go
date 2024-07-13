package greeting

import (
	"context"
	"fmt"
	"log"
	"mygrpc/gen/pb"
)

type Server struct {
	pb.UnimplementedGreetingServiceServer
}

func NewServer() *Server {
	return &Server{}
}

func (s *Server) Hello(ctx context.Context, req *pb.HelloRequest) (*pb.HelloResponse, error) {
	log.Printf("GreetingService.Hello: %v", req.GetName())

	return &pb.HelloResponse{
		Message: fmt.Sprintf("Hello, %s!", req.GetName()),
	}, nil
}
