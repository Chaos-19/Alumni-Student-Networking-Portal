FROM golang:1.22.5-alpine3.20 AS builder
WORKDIR /
COPY go.mod .
RUN go mod download
ADD . .
RUN go build -o bin/alumni /cmd/main.go

FROM alpine:3.19.0
WORKDIR /
ENV ZONEINFO=/zoneinfo.zip
COPY --from=builder /usr/local/go/lib/time/zoneinfo.zip /zoneinfo.zip
COPY --from=builder /sql/schemas /sql/schemas
COPY --from=builder /bin/alumni .
RUN mkdir /uploads
ENTRYPOINT [ "./alumni" ]
