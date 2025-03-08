function writeCards(names, event) {
  let messages = []; // Create an empty array to store messages
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

// Function to count down from a given number to zero
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--; // Decrement the number
  }
}