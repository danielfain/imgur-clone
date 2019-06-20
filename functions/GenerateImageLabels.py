import boto3
import uuid
import json

rekognition = boto3.client("rekognition", "us-east-1")
dynamo = boto3.resource("dynamodb", "us-east-1")

max_labels = 3
min_confidence = 80


def lambda_handler(event, context):
    image_key = event["Records"][0]["s3"]["object"]["key"]
    
    response = rekognition.detect_labels(
        Image = {
            "S3Object": {
                "Bucket": "imgurclone",
                "Name": image_key,
            }
        },
        MaxLabels = max_labels,
        MinConfidence = min_confidence
    )

    labels = []
    
    for label in response["Labels"]:
        labels.append(label["Name"])
    
    key = uuid.uuid4().hex
    table = dynamo.Table("imgur_clone_images")

    table.put_item(
        Item = {
            "key": key,
            "image_key": image_key,
            "labels": labels
        }
    )

    response = {
        "statusCode": 200,
        "body": "success"
    }

    return response
