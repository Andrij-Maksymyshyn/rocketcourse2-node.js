module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          "Go Serverless v3.0! Your function executed successfully (my first deployed function)!",
        input: event,
      },
      null,
      2
    ),
  };
};
