# image-rekognizer

A serverless image hosting website where uploaded images are stored, identified via AWS Rekognition, and labelled.

### Example

![Dog Example](https://raw.githubusercontent.com/danielfain/image-rekognizer/master/images/dog_example.png)

A picture of a Golden Retriever I uploaded

### Backend

I chose AWS Lambda as my backend for its integration with other AWS services such as DynamoDB for keeping track of which labels belong to which images, S3 for image storage, and Rekognition for image detection. Lambda is also very cost efficient because it only runs when it needs to but this comes with a startup cost which can cause a delay on the first use.

### Frontend

I used React with Semantic UI components to build a simple interface which displays the images and their labels as cards.