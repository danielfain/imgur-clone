package main

import (
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
	"github.com/aws/aws-sdk-go/service/rekognition"
)

// Handler handles
func Handler(event events.S3Event) error {
	session, _ := session.NewSession(&aws.Config{
		Region: aws.String("us-east-1")},
	)

	key := event.Records[0].S3.Object.Key
	rekognitionClient := rekognition.New(session)
	dynamoClient := dynamodb.New(session)

	result, err := rekognitionClient.DetectLabels(&rekognition.DetectLabelsInput{
		Image: &rekognition.Image{
			S3Object: &rekognition.S3Object{
				Bucket: aws.String("imgurclone"),
				Name:   aws.String(key),
			},
		},
		MaxLabels:     aws.Int64(3),
		MinConfidence: aws.Float64(80),
	})

	if err != nil {
		return err
	}

	var labels []*string

	for _, label := range result.Labels {
		labels = append(labels, label.Name)
	}

	marshalledKey, err := dynamodbattribute.Marshal(key)
	marshalledLabels, err := dynamodbattribute.Marshal(labels)

	if err != nil {
		return err
	}

	_, err = dynamoClient.PutItem(&dynamodb.PutItemInput{
		Item: map[string]*dynamodb.AttributeValue{
			"key":    marshalledKey,
			"labels": marshalledLabels,
		},
		TableName: aws.String("imgur_clone_images"),
	})

	if err != nil {
		return err
	}

	return nil

}

func main() {
	lambda.Start(Handler)
}
