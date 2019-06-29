const AWS = require('aws-sdk');

exports.handler = async (event) => {
    var s3 = new AWS.S3();
    
    var key = event.queryStringParameters.key;
    var type = event.queryStringParameters.type;
    
    var s3Params = {
      Bucket: process.env.BUCKET,
      Key:  key,
      ContentEncoding: 'base64',
      ContentType: type,
      Expires: 3600,
      ACL: 'public-read'
    };
    
    var uploadURL = await s3.getSignedUrl('putObject', s3Params);
    
    var response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          uploadURL
        })
    };
    
    return response;
};
