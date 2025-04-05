// Excercise 1 Max of two numbers
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
    console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

// Excercise 2: isAdult()
const isAdult = (age) => {
    if(age >= 18){
        return 'Adult'
    } else {
        return 'Minor'
    }
}
console.log('Excercise 2 result:', isAdult(21))

// Excercise 3 isCharAVowel()
const isCharAVowel = (character) => {
    if(character==='a'||character==='e'||character==='i'||character==='o'||character==='u'){
        return true
    }  else {
        return false
    }
}
console.log('Excercise 3 result', isCharAVowel('a'))

// Excercise 4: generateEmail()
const generateEmail =(userName,domain) => {
    let firstHalf = userName
    let secondHalf = domain
    return `${firstHalf}@${secondHalf}`
}
console.log('Excercise 4 result:', generateEmail('johnsmith','example.com'))

// Excercise 5 greetUser()
const greetUser = (userName,timeOfDay) => {
    let inputName = userName
    let whatTimeIsIt = timeOfDay
    return `Good ${timeOfDay}, ${inputName}!`
}
console.log('Excercise 5 result:', greetUser('Sam','morning'))

// Excercise 6 maxOfThree()
const maxOfThree = (x,y,z) => {
    if( x>=y && x>=z) {
        return x
    } else if (y>=z && y>=x){
        return y
    } else if (z>=x && z>=y){
        return z
    }
}
console.log('Excercise 6 result:',maxOfThree(5,10,8))

// Excercise 7 calculateTip()
const calculateTip = (billAmount, tipPercentage) => {
    let wholeBill = billAmount
    let myTip = wholeBill * (tipPercentage/100)
    return myTip
}
console.log('Excercise 7 result:', calculateTip(50,20))

// Excercise 8 convertTemperature
const convertTemperature = (temperature, scale) => {
    if (scale === 'C'){
        return temperature * (9/5) + 32     
    } else if (scale ==='F') {
        return (temperature - 32) * (5/9)
    }
}
console.log('Excercise 8 result:', convertTemperature(32,'C'))

// Excercise 9 basicCalculator()
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
console.log('Excercise 9 result:', basicCalculator(10,5,'subtract'))
