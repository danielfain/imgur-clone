package main

import (
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/rekognition"
)

func Handler(event events.S3Event) error {
	session, _ := session.NewSession(&aws.Config{
		Region: aws.String("us-east-1")},
	)

	key := event.Records[0].S3.Object.Key

	client := rekognition.New(session)

	result, _ := client.DetectLabels(&rekognition.DetectLabelsInput{
		Image: &rekognition.Image{
			S3Object: &rekognition.S3Object{
				Bucket: aws.String("imgurclone"),
				Name:   aws.String(key),
			},
		},
		MaxLabels:     aws.Int64(3),
		MinConfidence: aws.Float64(80),
	})

	var labels []*string

	for _, label := range result.Labels {
		labels = append(labels, label.Name)
	}

	return nil

}

func main() {
	lambda.Start(Handler)
}
