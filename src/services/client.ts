import { environment } from "../environment";

const AWS = require('aws-sdk');

AWS.config.update({
  region: environment.dynamodb.region,
  endpoint: environment.dynamodb.endpoint,
});

export const docClient = new AWS.DynamoDB.DocumentClient();