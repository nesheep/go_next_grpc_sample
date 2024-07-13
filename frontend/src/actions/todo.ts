"use server";

import { TodoServiceClient } from "@/gen/pb/todo_grpc_pb";
import {
  CompleteTodoRequest,
  CreateTodoRequest,
  DeleteTodoRequest,
  Todo,
} from "@/gen/pb/todo_pb";
import { credentials } from "@grpc/grpc-js";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import { revalidatePath } from "next/cache";

const client = new TodoServiceClient(
  "backend:8080",
  credentials.createInsecure()
);

export async function createTodo(title: string): Promise<void> {
  const req = new CreateTodoRequest();
  req.setTitle(title);

  return new Promise((resolve) => {
    client.createTodo(req, (err) => {
      if (err) console.log(err);
      revalidatePath("/todo");
      resolve();
    });
  });
}

export async function listTodos(): Promise<Todo[]> {
  const req = new google_protobuf_empty_pb.Empty();

  return new Promise((resolve) => {
    client.listTodos(req, (err, res) => {
      if (err) {
        resolve([]);
      } else {
        resolve(res.getTodosList());
      }
    });
  });
}

export async function completeTodo(id: number): Promise<void> {
  const req = new CompleteTodoRequest();
  req.setId(id);

  return new Promise((resolve) => {
    client.completeTodo(req, (err) => {
      if (err) console.log(err);
      revalidatePath("/todo");
      resolve();
    });
  });
}

export async function deleteTodo(id: number): Promise<void> {
  const req = new DeleteTodoRequest();
  req.setId(id);

  return new Promise((resolve) => {
    client.deleteTodo(req, (err) => {
      if (err) console.log(err);
      revalidatePath("/todo");
      resolve();
    });
  });
}
