package main

import (
	"encoding/json"
	"net/http"
	"os"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
)

// PresignedURL contains the presigned url
type PresignedURL struct {
	URL string `json:"uploadURL"`
}

// Handler for Lambda Function
func Handler(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	session, err := session.NewSession(&aws.Config{
		Region: aws.String(os.Getenv("region"))},
	)

	client := s3.New(session)

	req, _ := client.PutObjectRequest(&s3.PutObjectInput{
		Bucket:          aws.String(os.Getenv("bucket")),
		Key:             aws.String(request.QueryStringParameters["key"]),
		ContentType:     aws.String(request.QueryStringParameters["type"]),
		ContentEncoding: aws.String(os.Getenv("encoding")),
		ACL:             aws.String("public-read"),
	})

	urlStr, err := req.Presign(15 * time.Minute)

	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusInternalServerError,
			Headers:    map[string]string{"Access-Control-Allow-Origin": "*"},
		}, err
	}

	url, _ := json.Marshal(PresignedURL{URL: urlStr})

	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusOK,
		Headers:    map[string]string{"Access-Control-Allow-Origin": "*"},
		Body:       string(url),
	}, nil

}

func main() {
	lambda.Start(Handler)
}
