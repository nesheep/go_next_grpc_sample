"use server";

import { credentials } from "@grpc/grpc-js";
import { GreetingServiceClient } from "../_gen/grpc/hello_grpc_pb";
import { HelloRequest } from "../_gen/grpc/hello_pb";

const client = new GreetingServiceClient(
  "backend:8080",
  credentials.createInsecure()
);

export async function hello(name: string): Promise<string> {
  const req = new HelloRequest();
  req.setName(name);

  return new Promise((resolve) => {
    client.hello(req, (err, res) => {
      if (err) {
        resolve(err.message);
      } else {
        resolve(res.getMessage());
      }
    });
  });
}
