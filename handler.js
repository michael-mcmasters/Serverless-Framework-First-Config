"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(
      {
        message: "Hello world!",
        input: event,
      },
      null,
      2
    ),
  };
};
