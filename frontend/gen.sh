#!/bin/sh

npx grpc_tools_node_protoc \
    --plugin=./node_modules/.bin/protoc-gen-ts \
    --js_out=import_style=commonjs,binary:src/gen/pb \
    --grpc_out=grpc_js:src/gen/pb \
    --ts_out=grpc_js:src/gen/pb \
    -I /proto /proto/*.proto
