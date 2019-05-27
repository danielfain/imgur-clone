const AWS = require('aws-sdk');

exports.handler = async (event) => {
    var s3 = new AWS.S3();
    
    var key = event.key;
    var type = event.type;
    
    var s3Params = {
      Bucket: 'danielfain',
      Key:  key,
      ContentType: type,
      Expires: 3600,
      ACL: 'public-read'
    };
    
    var uploadURL = s3.getSignedUrl('putObject', s3Params);
    
    var response = {
        statusCode: 200,
        body: JSON.stringify({
          uploadURL
        })
    };
    
    return response;
};
