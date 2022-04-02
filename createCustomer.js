'use strict'
const AWS = require('aws-sdk')

// event comes in as Object.
// event.body comes in as string. (Because API Gateway stringifies it before sending to this Lambda.)
module.exports.createCustomer = async (event) => {
  const body = JSON.parse(event.body);
  const dynamoDb = new AWS.DynamoDB.DocumentClient()
  const putParams = {
    TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
    Item: {
      primary_key: body.name,
      email: body.email
    }
  }
  await dynamoDb.put(putParams).promise()

  return {
    statusCode: 201
  }
}