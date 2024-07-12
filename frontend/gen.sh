#!/bin/sh

npx grpc_tools_node_protoc \
    --plugin=./node_modules/.bin/protoc-gen-ts \
    --js_out=import_style=commonjs,binary:src/app/_gen/grpc \
    --grpc_out=grpc_js:src/app/_gen/grpc \
    --ts_out=grpc_js:src/app/_gen/grpc \
    -I /proto /proto/*.proto
