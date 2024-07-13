// package: myapp
// file: todo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as todo_pb from "./todo_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ITodoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createTodo: ITodoServiceService_ICreateTodo;
    listTodos: ITodoServiceService_IListTodos;
    completeTodo: ITodoServiceService_ICompleteTodo;
    deleteTodo: ITodoServiceService_IDeleteTodo;
}

interface ITodoServiceService_ICreateTodo extends grpc.MethodDefinition<todo_pb.CreateTodoRequest, todo_pb.CreateTodoReply> {
    path: "/myapp.TodoService/CreateTodo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<todo_pb.CreateTodoRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.CreateTodoRequest>;
    responseSerialize: grpc.serialize<todo_pb.CreateTodoReply>;
    responseDeserialize: grpc.deserialize<todo_pb.CreateTodoReply>;
}
interface ITodoServiceService_IListTodos extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, todo_pb.ListTodosReply> {
    path: "/myapp.TodoService/ListTodos";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<todo_pb.ListTodosReply>;
    responseDeserialize: grpc.deserialize<todo_pb.ListTodosReply>;
}
interface ITodoServiceService_ICompleteTodo extends grpc.MethodDefinition<todo_pb.CompleteTodoRequest, todo_pb.CompleteTodoReply> {
    path: "/myapp.TodoService/CompleteTodo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<todo_pb.CompleteTodoRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.CompleteTodoRequest>;
    responseSerialize: grpc.serialize<todo_pb.CompleteTodoReply>;
    responseDeserialize: grpc.deserialize<todo_pb.CompleteTodoReply>;
}
interface ITodoServiceService_IDeleteTodo extends grpc.MethodDefinition<todo_pb.DeleteTodoRequest, todo_pb.DeleteTodoReply> {
    path: "/myapp.TodoService/DeleteTodo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<todo_pb.DeleteTodoRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.DeleteTodoRequest>;
    responseSerialize: grpc.serialize<todo_pb.DeleteTodoReply>;
    responseDeserialize: grpc.deserialize<todo_pb.DeleteTodoReply>;
}

export const TodoServiceService: ITodoServiceService;

export interface ITodoServiceServer extends grpc.UntypedServiceImplementation {
    createTodo: grpc.handleUnaryCall<todo_pb.CreateTodoRequest, todo_pb.CreateTodoReply>;
    listTodos: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, todo_pb.ListTodosReply>;
    completeTodo: grpc.handleUnaryCall<todo_pb.CompleteTodoRequest, todo_pb.CompleteTodoReply>;
    deleteTodo: grpc.handleUnaryCall<todo_pb.DeleteTodoRequest, todo_pb.DeleteTodoReply>;
}

export interface ITodoServiceClient {
    createTodo(request: todo_pb.CreateTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.CreateTodoReply) => void): grpc.ClientUnaryCall;
    createTodo(request: todo_pb.CreateTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.CreateTodoReply) => void): grpc.ClientUnaryCall;
    createTodo(request: todo_pb.CreateTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.CreateTodoReply) => void): grpc.ClientUnaryCall;
    listTodos(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodosReply) => void): grpc.ClientUnaryCall;
    listTodos(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodosReply) => void): grpc.ClientUnaryCall;
    listTodos(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodosReply) => void): grpc.ClientUnaryCall;
    completeTodo(request: todo_pb.CompleteTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.CompleteTodoReply) => void): grpc.ClientUnaryCall;
    completeTodo(request: todo_pb.CompleteTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.CompleteTodoReply) => void): grpc.ClientUnaryCall;
    completeTodo(request: todo_pb.CompleteTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.CompleteTodoReply) => void): grpc.ClientUnaryCall;
    deleteTodo(request: todo_pb.DeleteTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoReply) => void): grpc.ClientUnaryCall;
    deleteTodo(request: todo_pb.DeleteTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoReply) => void): grpc.ClientUnaryCall;
    deleteTodo(request: todo_pb.DeleteTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoReply) => void): grpc.ClientUnaryCall;
}

export class TodoServiceClient extends grpc.Client implements ITodoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createTodo(request: todo_pb.CreateTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.CreateTodoReply) => void): grpc.ClientUnaryCall;
    public createTodo(request: todo_pb.CreateTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.CreateTodoReply) => void): grpc.ClientUnaryCall;
    public createTodo(request: todo_pb.CreateTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.CreateTodoReply) => void): grpc.ClientUnaryCall;
    public listTodos(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodosReply) => void): grpc.ClientUnaryCall;
    public listTodos(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodosReply) => void): grpc.ClientUnaryCall;
    public listTodos(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodosReply) => void): grpc.ClientUnaryCall;
    public completeTodo(request: todo_pb.CompleteTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.CompleteTodoReply) => void): grpc.ClientUnaryCall;
    public completeTodo(request: todo_pb.CompleteTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.CompleteTodoReply) => void): grpc.ClientUnaryCall;
    public completeTodo(request: todo_pb.CompleteTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.CompleteTodoReply) => void): grpc.ClientUnaryCall;
    public deleteTodo(request: todo_pb.DeleteTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoReply) => void): grpc.ClientUnaryCall;
    public deleteTodo(request: todo_pb.DeleteTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoReply) => void): grpc.ClientUnaryCall;
    public deleteTodo(request: todo_pb.DeleteTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.DeleteTodoReply) => void): grpc.ClientUnaryCall;
}
