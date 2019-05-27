import boto3
import uuid
import json

rekognition = boto3.client("rekognition", "us-east-1")

max_labels = 3
min_confidence = 80

def lambda_handler(event, context):
    response = rekognition.detect_labels(
        Image = {
            "S3Object": {
                "Bucket": "danielfain",
                "Name": event["key"],
            }
        },
        MaxLabels = max_labels,
        MinConfidence = min_confidence
    ) 
    
    return response["Labels"]