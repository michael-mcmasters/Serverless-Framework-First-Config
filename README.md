# Serverless Framework

serverless.yml is the config file for your AWS services (API Gateway, Lambda functions, and DynamoDB).
<br />
createCustomer.js, getCustomers.js and handler.js are the Lambda functions.

## To Use

Serverless Framework documentation: https://www.serverless.com/framework/docs

- Install Serverless Framework with NPM if you don't have it already.
```
npm install -g serverless
```

- Go to https://app.serverless.com and make an account.
- Create an organization.
- Go to Org, Providers -> Add -> Connect your AWS account. This enables Serverless Framework to provision these services in AWS.
- Clone this project.

```
git clone https://github.com/michael-mcmasters/Serverless-Framework-First-Config.git
```

- Deploy services to AWS.
```
serverless deploy
```

- Follow the prompts in the command line. This will connect your config to Serverless Framework.
- When finished, it will deploy API Gateway, Lambda, and DynamoDB as seen in serverless.js.
