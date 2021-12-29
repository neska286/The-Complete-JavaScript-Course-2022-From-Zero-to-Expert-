// Exersie one
// var d = new Date();
// var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// var n = weekday[d.getDay()];
// get Date
// document.getElementById("day").innerHTML="Today is : " + " "+ n;
// get  time

//var time = d.getHours()+ " : " + d.getMinutes()+ " : " + d.getSeconds() 

//var time =  d.toLocaleString('en-US', { hour: 'numeric', hour12: true })

// var hours = d.getHours();
// var minutes = d.getMinutes();
// var seconds = d.getSeconds();
// var ampm = hours >= 12 ? 'pm' : 'am';
// hours = hours % 12;
// hours = hours ? hours : 12; // the hour '0' should be '12'
// minutes = minutes < 10 ? '0'+minutes : minutes;
// var strTime = hours + ':' + minutes +':' + seconds+' ' + ampm;
// document.getElementById("time").innerHTML="Current Time is : " + " "+ strTime

//Exersie two
//  function printCurrentPage(){
//      window.print();
//  }

//Exersie three
//  monthNames = ["January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"];
// var month = d.getMonth();
// var day = String(d.getDate()).padStart(2, '0');
// var year = d.getFullYear();
// var output = month  + '/'+ day  + '/' + year;
// document.getElementById("newDateFormate").innerHTML="Current Date is : " + " "+ output



//Exersie four

/* area of triangle = 1/2(base*hieght) */

// const a = 5;
// const b = 6;
// const c = 7;
// // calculate the semi-perimeter
// const s = (a + b + c) / 2;
// console.log(s);

// //calculate the area
// const areaValue = Math.sqrt(
//     s * (s - a) * (s - b) * (s - c)
//   );
//   console.log(` The area of the triangle ${areaValue}`)

  //Exersie five

 // let stateOne = 'w3resource';

  

//  function countTrue(arr) {

// 	for(i = 0 ; i < arr.length ; i++){
//         console.log(arr[i])
     

//     }
	
// }
// countTrue([true, false, false, true, false])


////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/

/* BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter). */
//Store variables


// let markHieght = 1.69
// let markMass = 78
// let johnHieght = 1.88
// let johnMass = 92

// // Calculate BMI

// const bmiMark = markMass/markHieght ** 2;
// const bmiJohn = johnMass/johnHieght

// console.log("BMI Mark is :" + bmiMark);
// console.log("BMI John is :" + bmiJohn);

// if (bmiMark>bmiJohn){
//     console.log(true)
// }else 
// console.log(false)

///////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/

// const averageDolphins = (96 + 108 + 89 )/3;
// const averageKoalas = (88 + 91 + 110) /3;

// console.log(averageDolphins);//97.66666666666667
// console.log(averageKoalas); //96.33333333333333

// if(averageDolphins > averageKoalas ){
//     console.log(" Dolphines is the winner !");
// } else if (averageKoalas >  averageDolphins) {
//     console.log("Koalas is the winner");
// } else if (averageDolphins === averageKoalas){
//  console.log("They are the same ");
// }else  {
// console.log("no one wine");
// }

// const averageDolphins = (97 + 112 + 101 )/3;
// const averageKoalas = (109 + 95 + 106) /3;

// console.log(averageDolphins,averageKoalas);//103.33


// if(averageDolphins > averageKoalas && averageDolphins >= 100 ){
//     console.log(" Dolphines is the winner !");
// } else if (averageKoalas >  averageDolphins && averageKoalas >= 100) {
//     console.log("Koalas is the winner");
// } else if (averageDolphins === averageKoalas && averageDolphins >=100 && averageKoalas >=100){
//  console.log("They are the same ");
// }else {
//     console.log("no one win :(");
// }

// const day = 'monday';

// switch (day) {
//     case 'monday' : 
//     console.log(' Hello in Monday');
//     console.log(' I Like monday');
//     // break;
//     case 'tuesday' :
//         console.log('Hello in Tuesday');
//         // break;
//         case 'wednesday' :
//             console.log('Hello in Wedneday');
//             break;
//             case 'tuesday' :
//             case 'friday':
//                 console.log('Hello tuesday , hello friday');
//                 break;

//                 case 'saterday':
//                     case 'sunday':
//                     console.log("Welcome week end  :)");
//                     break;
//                     default:
//                         console.log('there is an error ');

// }

// if(day==='monday'){
//     console.log(' Hello in Monday');  
// } else if (day==='tuesday'){
//     console.log('Hello in Tuesday');
// }else if (day=== 'wednesday'){
//     console.log('Hello in Wednesady');
// }else if (day=== 'tuesday' || day=== 'friday'){
//     console.log('Hello in Tuesday');
// }else if (day=== 'saterday'){
//     console.log('Hello in Saterday');
// }else if (day=== 'sunday'){
//     console.log('Hello in Sunday');
// } else {
//     console.log('there is an error ');
// }

// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
TEST DATA: Test for bill values 275, 40 and 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀
*/



const bill = 275;
const tipValue =  bill <=300  &&  bill >= 50? bill * 0.15 : bill * 0.2;
console.log(`The bill value is ${bill} and The Tip value is 🥰 ${tipValue}  and The Final value is ${bill + tipValue}`);




 



