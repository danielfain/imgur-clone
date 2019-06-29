import boto3
import json
import os

dynamodb = boto3.resource('dynamodb', 'us-east-1')

def handler(event, context):
    table = dynamodb.Table(os.environ['dynamo_table'])
    limit = event['queryStringParameters']['limit']
    
    response = table.scan(
        Limit=int(limit),
        Select='ALL_ATTRIBUTES'
    )
    
    response = {
        "statusCode": 200,
        "body": json.dumps(response['Items']),
        'headers': {
            'Access-Control-Allow-Origin': '*'
        },
    }
    
    return response