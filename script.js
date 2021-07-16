/*1*/
let number = randomNumbers();
function oddOrEven (number){
    if (number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(oddOrEven(number));
  
  
/*2*/
let rectangleWidth = RandomNumbers(); 
let rectangleHeight = RandomNumbers();
function areaOfRectangle (a , b){
    let area = a * b 
    return area;
}
console.log(areaOfRectangle(rectangleWidth ,rectangleHeight ));
  
  
  
/*3*/ 
let squareSide = RandomNumbers();
function squareArea(a){
    return areaOfRectangle (a , a);
}
console.log(squareArea(squareSide))
  
/*4*/
function RandomNumbers(){
    let randomNumber = Math.round(Math.random() * 100);
    return randomNumber;
}
/*5*/
let min = 0;let max = 100;
    function RandomNumbersFromRange (min , max){
    return Math.floor(
    Math.random() * (max - min + 1) + min
    )
}
console.log (RandomNumbersFromRange (min , max))
  
/*6*/
let n = Math.round(Math.random() * 100)
function RandomNumbersArray (n){
    let numberArray= [];
    for(let i = 0 ; i < n ; i++ ){
        numberArray.push(RandomNumbersFromRange (min , max));
    }
    return numberArray;
}
let randomNumbers = generateRandomNumbersArray (n);

console.log(randomNumbers)
  
/*7*/ 
function highNumberInArray(n){ 
    let highNumber= 0;
    for(let i = 0 ; i < n.length ; i++){
        if(n[i] > highNumber){
            highNumber = n[i] ;
        }
    }
    return highNumber;
}
console.log(highNumberInArray(randomNumbers))
  
/*8*/
function simpleNumber(n){
    if (n===1)
    {
    return false;
    }
    else if(n === 2)
    {
    return true;
    }else
    {
    for(let x = 2; x < n; x++)
    {
    if(n % x === 0)
    {
    return false;
    }
    }
    return true;  
    }
  
}
console.log(simple(Math.round(Math.random() * 100)))
  
/*9*/
function generateSimpleArrays(a , b){
let simpleNumberArray = [];
if(a == 0) {a++;
}
    for(let i = a ; i< b ; i++){
        if(simple(i) == true)
        simpleNumberArray.push(i);
    }
    return simpleNumberArray;
}
console.log(generateSimpleArrays(0 , 63))