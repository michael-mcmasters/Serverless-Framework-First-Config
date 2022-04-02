# Serverless Framework

View the AWS services config in serverless.yml
<br />
createCustomer.js, getCustomers.js and handler.js are the Lambda functions.

## To Use

Documentation: https://www.serverless.com/framework/docs

- Go to https://app.serverless.com and make an account.
- Create an organization.
- Go to Org, Providers, Add, and connect your AWS account. This enables Serverless Framework to provision these AWS services.

Clone this project

```
git clone https://github.com/michael-mcmasters/Serverless-Framework-First-Config.git
```

Deploy services to AWS
```
serverless deploy
```

Follow the prompts to connect your config to Serverless Framework.
It will deploy API Gateway, Lambda and DynamoDB.
It will ask you a few questions to connect this project to your Serverless Framework account, and then will deploy API Gateway, Lambda, and DynamoDB.
