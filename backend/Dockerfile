FROM golang:1.22-bookworm AS builder
WORKDIR /app
COPY . .
RUN go mod download \
    && go build -o main main.go

FROM debian:bookworm
WORKDIR /app
COPY --from=builder /app/main .
CMD ["./main"]
