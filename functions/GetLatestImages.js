const AWS = require('aws-sdk');

exports.handler = async (event) => {
    var s3 = new AWS.S3();
    
    var limit = event.queryStringParameters.limit;
    
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
