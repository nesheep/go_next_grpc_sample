// package: myapp
// file: todo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Todo extends jspb.Message { 
    getId(): number;
    setId(value: number): Todo;
    getTitle(): string;
    setTitle(value: string): Todo;
    getCompleted(): boolean;
    setCompleted(value: boolean): Todo;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Todo;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Todo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Todo.AsObject;
    static toObject(includeInstance: boolean, msg: Todo): Todo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Todo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Todo;
    static deserializeBinaryFromReader(message: Todo, reader: jspb.BinaryReader): Todo;
}

export namespace Todo {
    export type AsObject = {
        id: number,
        title: string,
        completed: boolean,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CreateTodoRequest extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): CreateTodoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTodoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTodoRequest): CreateTodoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTodoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTodoRequest;
    static deserializeBinaryFromReader(message: CreateTodoRequest, reader: jspb.BinaryReader): CreateTodoRequest;
}

export namespace CreateTodoRequest {
    export type AsObject = {
        title: string,
    }
}

export class CreateTodoReply extends jspb.Message { 
    getOk(): boolean;
    setOk(value: boolean): CreateTodoReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTodoReply.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTodoReply): CreateTodoReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTodoReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTodoReply;
    static deserializeBinaryFromReader(message: CreateTodoReply, reader: jspb.BinaryReader): CreateTodoReply;
}

export namespace CreateTodoReply {
    export type AsObject = {
        ok: boolean,
    }
}

export class ListTodosReply extends jspb.Message { 
    clearTodosList(): void;
    getTodosList(): Array<Todo>;
    setTodosList(value: Array<Todo>): ListTodosReply;
    addTodos(value?: Todo, index?: number): Todo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTodosReply.AsObject;
    static toObject(includeInstance: boolean, msg: ListTodosReply): ListTodosReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTodosReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTodosReply;
    static deserializeBinaryFromReader(message: ListTodosReply, reader: jspb.BinaryReader): ListTodosReply;
}

export namespace ListTodosReply {
    export type AsObject = {
        todosList: Array<Todo.AsObject>,
    }
}

export class CompleteTodoRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): CompleteTodoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompleteTodoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CompleteTodoRequest): CompleteTodoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompleteTodoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompleteTodoRequest;
    static deserializeBinaryFromReader(message: CompleteTodoRequest, reader: jspb.BinaryReader): CompleteTodoRequest;
}

export namespace CompleteTodoRequest {
    export type AsObject = {
        id: number,
    }
}

export class CompleteTodoReply extends jspb.Message { 
    getOk(): boolean;
    setOk(value: boolean): CompleteTodoReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompleteTodoReply.AsObject;
    static toObject(includeInstance: boolean, msg: CompleteTodoReply): CompleteTodoReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompleteTodoReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompleteTodoReply;
    static deserializeBinaryFromReader(message: CompleteTodoReply, reader: jspb.BinaryReader): CompleteTodoReply;
}

export namespace CompleteTodoReply {
    export type AsObject = {
        ok: boolean,
    }
}

export class DeleteTodoRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): DeleteTodoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTodoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTodoRequest): DeleteTodoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTodoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTodoRequest;
    static deserializeBinaryFromReader(message: DeleteTodoRequest, reader: jspb.BinaryReader): DeleteTodoRequest;
}

export namespace DeleteTodoRequest {
    export type AsObject = {
        id: number,
    }
}

export class DeleteTodoReply extends jspb.Message { 
    getOk(): boolean;
    setOk(value: boolean): DeleteTodoReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTodoReply.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTodoReply): DeleteTodoReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTodoReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTodoReply;
    static deserializeBinaryFromReader(message: DeleteTodoReply, reader: jspb.BinaryReader): DeleteTodoReply;
}

export namespace DeleteTodoReply {
    export type AsObject = {
        ok: boolean,
    }
}
