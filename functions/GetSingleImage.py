import boto3
import json
from boto3.dynamodb.conditions import Key, Attr

dynamodb = boto3.resource('dynamodb', 'us-east-1')

def single(event, context):
    table = dynamodb.Table('imgur_clone_images')
    key = event['queryStringParameters']['key']

    response = table.get_item(
        Key = { 
            'key': key
        }
    )
    
    response = {
        "statusCode": 200,
        "body": json.dumps(response['Item']),
        'headers': {
            'Access-Control-Allow-Origin': '*'
        },
    }

    return response