// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variable provided.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"
describe("when string with consonents and vowels is called", () => {
  it("returns a string with the vowels coded to integers", () => {
    const stringWithConsonets = str.split(' ')
    var newArray1 = []
    for (var i = 0; i < stringWithConsonets.length; i++) {
      newArray1.push(stringWithConsonets[i].charAt(0) + stringWithConsonets[i].slice(1))
    }
    return newArray1.join(' ')
    expect(stringWithConsonets(newArray1)).toEqual()
  })
})




// b) Create the function that makes the test pass.





// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"
describe("wordsWithLetterA", () => {
  it("returns an array of words with the letter 'a' in it ", () => {
    var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
    const expectedArray = []
    for (var i = 0; i < array.length; i++) {
      arrayOfWords.map(array[i])
    }
    expect(wordsWithLetterA(arrayOfWords)).toEqual()
  })
})




// b) Create the function that makes the test pass.





// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
describe("when an arrayOfNums is called", () => {
  it("returns a boolean of true of false", () => {
    boolean arrayOfNums = true;
    int [] cont = new int [6];
for (int i=0;i < Game.length;i++)
{
    cont[Game[i].getValue()] ++;
}
for (int i=0;i < cont.length;i++)
{
    if (cont[Game[i].getValue()]==2)
    {
        arrayOfNums = false;
        System.out.println(Game + " : " + cont[i] + " times");
    }
}
  expect(arrayOfNums(hand1)).toEqual(true)
  })
})




// b) Create the function that makes the test pass.
