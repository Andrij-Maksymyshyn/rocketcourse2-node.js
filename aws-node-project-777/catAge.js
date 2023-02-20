module.exports.catAge = async (event) => {
  const { myAge } = event;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `If you would be a cat your age was maybe ${myAge * 7}`,
        input: event,
      },
      null,
      2
    ),
  };
};
