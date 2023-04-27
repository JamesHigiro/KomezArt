// Create an array of integers
const integers = [12,6,9,11,2,10];

// Sort the array in descending order
integers.sort(function(a, b) {
  return b - a;
});

// Get the second largest integer
const secondLargest = integers[1];

// Output the result
console.log(`the second largest number is : ${secondLargest}`); // Output: 8
