package todo

import (
	"context"
	"log"
	"mygrpc/entity"
	"mygrpc/gen/pb"
	"time"

	"github.com/uptrace/bun"
	"google.golang.org/protobuf/types/known/emptypb"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type Server struct {
	pb.UnimplementedTodoServiceServer
	db *bun.DB
}

func NewServer(db *bun.DB) *Server {
	return &Server{db: db}
}

func (s *Server) CreateTodo(ctx context.Context, req *pb.CreateTodoRequest) (*pb.CreateTodoReply, error) {
	log.Println("TodoService.CreateTodo")

	todo := &entity.Todo{
		Title: req.GetTitle(),
	}

	_, err := s.db.NewInsert().Model(todo).Exec(ctx)
	if err != nil {
		log.Println(err)
		return &pb.CreateTodoReply{Ok: false}, nil
	}

	return &pb.CreateTodoReply{Ok: true}, nil
}

func (s *Server) ListTodos(ctx context.Context, req *emptypb.Empty) (*pb.ListTodosReply, error) {
	log.Println("TodoService.ListTodos")

	var todos []entity.Todo
	err := s.db.NewSelect().Model(&todos).Order("id").Scan(ctx)
	if err != nil {
		log.Println(err)
		return &pb.ListTodosReply{}, nil
	}

	res := make([]*pb.Todo, 0, len(todos))
	for _, todo := range todos {
		res = append(res, &pb.Todo{
			Id:        todo.ID,
			Title:     todo.Title,
			Completed: todo.Completed,
			CreatedAt: timestamppb.New(todo.CreatedAt),
			UpdatedAt: timestamppb.New(todo.UpdatedAt),
		})
	}

	return &pb.ListTodosReply{Todos: res}, nil
}

func (s *Server) CompleteTodo(ctx context.Context, req *pb.CompleteTodoRequest) (*pb.CompleteTodoReply, error) {
	log.Println("TodoService.CompleteTodo")

	todo := &entity.Todo{ID: req.GetId()}
	err := s.db.NewSelect().Model(todo).WherePK().Scan(ctx)
	if err != nil {
		log.Println(err)
		return &pb.CompleteTodoReply{Ok: false}, nil
	}

	todo.Completed = true
	todo.UpdatedAt = time.Now()
	_, err = s.db.NewUpdate().Model(todo).WherePK().Exec(ctx)
	if err != nil {
		log.Println(err)
		return &pb.CompleteTodoReply{Ok: false}, nil
	}

	return &pb.CompleteTodoReply{Ok: true}, nil
}

func (s *Server) DeleteTodo(ctx context.Context, req *pb.DeleteTodoRequest) (*pb.DeleteTodoReply, error) {
	log.Println("TodoService.DeleteTodo")

	todo := &entity.Todo{ID: req.GetId()}
	_, err := s.db.NewDelete().Model(todo).WherePK().Exec(ctx)
	if err != nil {
		log.Println(err)
		return &pb.DeleteTodoReply{Ok: false}, nil
	}

	return &pb.DeleteTodoReply{Ok: true}, nil
}
