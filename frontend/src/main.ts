//Step 1: Create an array of numbers. Use the '.map' function to double all the numbers in the array.
let myNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myNumbers);
myNumbers = myNumbers.map((x: number) => x * 2);
console.log(myNumbers);

// Step 2: Create an array of words. Use the '.filter' function to select only the words that are longer than 5 letters.
let myWords: string[] = ["Hallo", "das", "ist", "ein", "Dinosaurier"];
console.log(myWords);
myWords = myWords.filter((w: string): boolean => w.length > 5);
console.log(myWords);

// Step 3: Create an array of numbers. Use the '.reduce' function to calculate the sum of all the numbers in the array.
let sum: number = myNumbers.reduce((previousValue: number, currentValue: number): number => previousValue + currentValue)
console.log(sum)

// Step 4: Create an array of numbers. Use the '.some' function to check if at least one number is greater than 10.
let isGreaterThan10: boolean = myNumbers.some((value: number): boolean => value > 10);
console.log(isGreaterThan10);