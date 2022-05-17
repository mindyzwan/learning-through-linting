/*
This small program takes a set of input values (an array of strings) and sends them through some
verification steps (the two functions at the top). If all of the input values are valid, the program
will output "Your input is valid." If not, it will output "Your input is invalid" along with some
information about why.
*/

const isLessThan10Chars = (input) => {
  return input.length < 10
}
const startsWithAlphaCharacter = (input) => {
  return /[A-Za-z]/.test(input[0]);
}

let possibleResponses = {
  empty: 'Your input array is empty.',
  invalid: {
      tooLong: 'Some of your input text is too long! Each entry must be at most 10 characters!',
      badFirstCharacter: 'Some of your input text started with a non-alpha character!',
  },
};

const parseInput = (inputArray) => {
  const inputDetails = {
    numberOfEntries: inputArray.length,
    responseMessages: new Array(),
    isValid: true,
  };

  if (inputArray.length === 0) {
    inputDetails.isValid = false;
    inputDetails.responseMessages.push(possibleResponses.empty);
  }

  for (const i of inputArray) {
    inputDetails.isValid = inputDetails.isValid && isLessThan10Chars(i) && startsWithAlphaCharacter(i);
    if (!isLessThan10Chars(i)) {
      inputDetails.responseMessages.push(possibleResponses.invalid.tooLong)
    }
    if (!startsWithAlphaCharacter(i)) {
      inputDetails.responseMessages.push(possibleResponses.invalid.badFirstCharacter)
    }
  }

  return inputDetails;
};

const respondWithMessage = (isValid, responseMessages) => {
  console.log(`Your input is ${isValid ? 'valid' : 'invalid'}`);
  if (responseMessages.length > 0) {
    for (let message of responseMessages) {
      console.log(message);
    }
  }
};

const processInput = (inputArray) => {
  const inputDetails = parseInput(inputArray);
  const { responseMessages, isValid } = inputDetails;
  respondWithMessage(isValid, responseMessages);
};

processInput(['test', '1', 'two', 'three', 'a1234567890']);
