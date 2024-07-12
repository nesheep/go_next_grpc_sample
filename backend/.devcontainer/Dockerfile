FROM golang:1.22-bookworm

WORKDIR /tmp

RUN apt-get update && apt-get install -y unzip

RUN curl -Lo protoc.zip "https://github.com/protocolbuffers/protobuf/releases/latest/download/protoc-27.2-linux-x86_64.zip" \
    && unzip -q protoc.zip bin/protoc 'include/*' -d /usr/local \
    && chmod a+x /usr/local/bin/protoc \
    && rm -rf protoc.zip

WORKDIR /app

RUN go install golang.org/x/tools/gopls@latest \
    && go install github.com/go-delve/delve/cmd/dlv@latest \
    && go install honnef.co/go/tools/cmd/staticcheck@latest \
    && go install google.golang.org/protobuf/cmd/protoc-gen-go@latest \
    && go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest \
    && go install github.com/fullstorydev/grpcurl/cmd/grpcurl@latest
