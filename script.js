/**
 * 1.. Even or Odd Checker.
       Write a function that takes a number as input and prints whether the number is
      even or odd.
 */

const checkEvenOrOdd = (num) => {
  console.log(num % 2 === 0 ? "even number" : "odd number");
};
checkEvenOrOdd(6);

/**
 * Q2. Count Vowels in a String.
  Write a function that counts the number of vowels (a, e, i, o, u) in a given
  string. 
 */
let vowellcount = 0;
const countVowels = (string) => {
  for (let value of string) {
    if (
      value === "a" ||
      value === "A" ||
      value === "e" ||
      value === "E" ||
      value === "i" ||
      value === "I" ||
      value === "o" ||
      value === "u"
    ) {
      vowellcount++;
    }
  }
  return vowellcount;
};
console.log(`voweell count= ${countVowels("aeibbbgo")}`);

/**
 * Q3. Sum of Array Elements
    Write a function that returns the sum of all numbers in an array.
 */
const array = [1, 1, 1, 1, 1];
let sum = 0;
const sumOfarray = (array) => {
  for (let value of array) {
    sum += value;
  }
  return sum;
};
console.log(`sum = ${sumOfarray(array)}`);

/**
 * Q4. Find the Largest Number
  Write a function to find the largest number from an array.
 */
const array1 = [34, 56, 23, 94,-2, -100,94];
const largest = array1.reduce((acc, item) => {
  acc < item ? (acc = item) : acc;
  return acc;
}, array1[0]);
console.log(`largest`, largest);

/**
 * 5. Count Object Properties
Write a function that returns the number of properties in a given object.
Example Input:
{name: "Laptop", price: 45000, brand: "HP"}
 */
const object = { name: "Laptop", price: 45000, brand: "HP" };

const countProperties = (o) => {
  return Object.keys(o).length;
};
console.log(`total number of properties`, countProperties(object));

/**
 * 6. Find Duplicate Values
Write a function that returns all duplicate values from an array.
Example Input:
[1, 2, 3, 2, 4, 5, 1]
 */

const findArray=[1, 2, 3, 2, 4, 5, 1]
let flag=0
const dupe=[]
const unique=[]
for(let i=0;i<findArray.length;i++){
    flag=0;
   for(let j=i+1;j<findArray.length;j++){
    if(findArray[i]===findArray[j]){
    flag=1;
    break;
    }}
    if(flag){
    dupe.push(findArray[i])
    }else{
    unique.push(findArray[i])
    }
   

}

console.log(`duplicate=${dupe}`)
console.log(`unique=${unique}`)
/**
 * Q7. Palindrome Check (Without reverse method) (5 Marks)
Write a function to check whether a given string is a palindrome.
Do not use reverse().
Example Input:
"level"
 */
const string1 = "level";

let rev = "";
const checkPalindrome = (string) => {
  for (let i = string.length - 1; i >= 0; i--) {
    rev += string[i];
  }
  console.log(rev === string ? "its palindrome" : "its not palindrome");
};
checkPalindrome(string1);

/**
 * Q8. Word Frequency Counter
Write a function that returns an object showing how many times each word appears
in a sentence.
Example Input:

Expected Output:
{ I: 2, love: 2, JS: 1, and: 1, coding: 1 }
 */
const sentence = "I love JS and I love coding";

const freequency = sentence.split(" ").reduce((acc, item) => {
  acc[item] ? (acc[item] += 1) : (acc[item] = 1);
  return acc;
}, {});
console.log(freequency);

/**
 * Q9. Filter Passed Students
Write a function that takes an array of student objects and returns only the students
who scored above 60 marks.
Example Input:
[
 { name: "Anu", mark: 55 },
 { name: "Rahul", mark: 75 }
]
 */

const arrayObject = [
  { name: "Anu", mark: 55 },
  { name: "Rahul", mark: 75 },
];
const newArray = arrayObject.filter((item) => item.mark > 60);
console.log(newArray);

/**
 * Q10. Find the Longest Word
Write a function that finds the longest word in a given sentence.
Example Input:
"JavaScript practical questions are very important"
 */

const longSentence = "JavaScript practical questionso are very important";
const makeArray = longSentence.split(" ");
let longest = makeArray[0];
let longestC = makeArray[0].length;
const findLongest = (longest, longestC) => {
  for (let value of makeArray) {
    if (value.length > longestC) {
      longest = value;
    }
  }
  return longest;
};
console.log(`longest = ${findLongest(longest, longestC)}`);
