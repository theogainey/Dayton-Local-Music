import aws from 'aws-sdk';

export const client = new aws.DynamoDB.DocumentClient({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  region: process.env.REGION,
  params: {
    TableName: process.env.TABLE_NAME
  }
});
