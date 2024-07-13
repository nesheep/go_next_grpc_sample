// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var todo_pb = require('./todo_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myapp_CompleteTodoReply(arg) {
  if (!(arg instanceof todo_pb.CompleteTodoReply)) {
    throw new Error('Expected argument of type myapp.CompleteTodoReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myapp_CompleteTodoReply(buffer_arg) {
  return todo_pb.CompleteTodoReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myapp_CompleteTodoRequest(arg) {
  if (!(arg instanceof todo_pb.CompleteTodoRequest)) {
    throw new Error('Expected argument of type myapp.CompleteTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myapp_CompleteTodoRequest(buffer_arg) {
  return todo_pb.CompleteTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myapp_CreateTodoReply(arg) {
  if (!(arg instanceof todo_pb.CreateTodoReply)) {
    throw new Error('Expected argument of type myapp.CreateTodoReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myapp_CreateTodoReply(buffer_arg) {
  return todo_pb.CreateTodoReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myapp_CreateTodoRequest(arg) {
  if (!(arg instanceof todo_pb.CreateTodoRequest)) {
    throw new Error('Expected argument of type myapp.CreateTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myapp_CreateTodoRequest(buffer_arg) {
  return todo_pb.CreateTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myapp_DeleteTodoReply(arg) {
  if (!(arg instanceof todo_pb.DeleteTodoReply)) {
    throw new Error('Expected argument of type myapp.DeleteTodoReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myapp_DeleteTodoReply(buffer_arg) {
  return todo_pb.DeleteTodoReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myapp_DeleteTodoRequest(arg) {
  if (!(arg instanceof todo_pb.DeleteTodoRequest)) {
    throw new Error('Expected argument of type myapp.DeleteTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myapp_DeleteTodoRequest(buffer_arg) {
  return todo_pb.DeleteTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_myapp_ListTodosReply(arg) {
  if (!(arg instanceof todo_pb.ListTodosReply)) {
    throw new Error('Expected argument of type myapp.ListTodosReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_myapp_ListTodosReply(buffer_arg) {
  return todo_pb.ListTodosReply.deserializeBinary(new Uint8Array(buffer_arg));
}


var TodoServiceService = exports.TodoServiceService = {
  createTodo: {
    path: '/myapp.TodoService/CreateTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.CreateTodoRequest,
    responseType: todo_pb.CreateTodoReply,
    requestSerialize: serialize_myapp_CreateTodoRequest,
    requestDeserialize: deserialize_myapp_CreateTodoRequest,
    responseSerialize: serialize_myapp_CreateTodoReply,
    responseDeserialize: deserialize_myapp_CreateTodoReply,
  },
  listTodos: {
    path: '/myapp.TodoService/ListTodos',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: todo_pb.ListTodosReply,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_myapp_ListTodosReply,
    responseDeserialize: deserialize_myapp_ListTodosReply,
  },
  completeTodo: {
    path: '/myapp.TodoService/CompleteTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.CompleteTodoRequest,
    responseType: todo_pb.CompleteTodoReply,
    requestSerialize: serialize_myapp_CompleteTodoRequest,
    requestDeserialize: deserialize_myapp_CompleteTodoRequest,
    responseSerialize: serialize_myapp_CompleteTodoReply,
    responseDeserialize: deserialize_myapp_CompleteTodoReply,
  },
  deleteTodo: {
    path: '/myapp.TodoService/DeleteTodo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.DeleteTodoRequest,
    responseType: todo_pb.DeleteTodoReply,
    requestSerialize: serialize_myapp_DeleteTodoRequest,
    requestDeserialize: deserialize_myapp_DeleteTodoRequest,
    responseSerialize: serialize_myapp_DeleteTodoReply,
    responseDeserialize: deserialize_myapp_DeleteTodoReply,
  },
};

exports.TodoServiceClient = grpc.makeGenericClientConstructor(TodoServiceService);
