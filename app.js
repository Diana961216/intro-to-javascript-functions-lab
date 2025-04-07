// Exercise 1 Max of two numbers
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
    console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

// Exercise 2: isAdult()
const isAdult = (age) => {
    if(age >= 18){
        return 'Adult'
    } else {
        return 'Minor'
    }
}
console.log('Exercise 2 result:', isAdult(21))

// Exercise 3 isCharAVowel()
const isCharAVowel = (character) => {
    if(character==='a'||character==='e'||character==='i'||character==='o'||character==='u'){
        return true
    }  else {
        return false
    }
}
console.log('Exercise 3 result', isCharAVowel('a'))

// Exercise 4: generateEmail()
const generateEmail =(userName,domain) => {
    let firstHalf = userName
    let secondHalf = domain
    return `${firstHalf}@${secondHalf}`
}
console.log('Exercise 4 result:', generateEmail('johnsmith','example.com'))

// Exercise 5 greetUser()
const greetUser = (userName,timeOfDay) => {
    let inputName = userName
    let whatTimeIsIt = timeOfDay
    return `Good ${timeOfDay}, ${inputName}!`
}
console.log('Exercise 5 result:', greetUser('Sam','morning'))

// Exercise 6 maxOfThree()
const maxOfThree = (x,y,z) => {
    if( x>=y && x>=z) {
        return x
    } else if (y>=z && y>=x){
        return y
    } else if (z>=x && z>=y){
        return z
    }
}
console.log('Exercise 6 result:',maxOfThree(5,10,8))

// Exercise 7 calculateTip()
const calculateTip = (billAmount, tipPercentage) => {
    let wholeBill = billAmount
    let myTip = wholeBill * (tipPercentage/100)
    return myTip
}
console.log('Exercise 7 result:', calculateTip(50,20))

// Exercise 8 convertTemperature
const convertTemperature = (temperature, scale) => {
    if (scale === 'C'){
        return temperature * (9/5) + 32     
    } else if (scale ==='F') {
        return (temperature - 32) * (5/9)
    }
}
console.log('Exercise 8 result:', convertTemperature(32,'C'))

// Exercise 9 basicCalculator()
const basicCalculator = (num1,num2,operation) =>{
    if (operation ==='add'){
        return num1 + num2
    } else if (operation === 'subtract'){
        return num1 - num2
    } else if (operation === 'multiply') {
        return num1 * num2
    } else if (operation === 'divide') {
        return num1 / num2
    }
}
console.log('Exercise 9 result:', basicCalculator(10,5,'subtract'))

//Exercise 10
const calculateGrade = (myGrade) => {
    if (myGrade >= 90) {
        return 'A'
    } else if (myGrade >= 80 && myGrade <= 89) {
        return 'B'
    } else if (myGrade >= 70 && myGrade <= 79) {
        return 'C'
    } else if (myGrade >= 60 && myGrade <= 69) {
        return 'D'
    } else {
        return 'F'
    }
}
console.log('Exercise 10 Result:',calculateGrade(100))

// Exercise 11
const createUsername = (firstName, lastName) => {
    const firstPart = firstName.slice(0, 3)
    const lastPart = lastName.slice(0, 3)
    const totalLength = firstName.length + lastName.length
    return firstPart + lastPart + totalLength
}
console.log('Exercise 11 result:',createUsername('Samantha', 'Green'))

//Exercise 12
const numArgs = (...args) => {
    return args.length;
}

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4))
