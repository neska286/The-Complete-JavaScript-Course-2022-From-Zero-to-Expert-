// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
GOOD LUCK 😀
*/

// //function declaration
//  function calcAverage (a,b,c){ 
  
//   return (a+b+c)/3
// }

// console.log(calcAverage(44,23,71));

// console.log(calcAverage(65,54,49));

// //function expresion

// const calc = function (a,b,c){ 
  
//   return (a+b+c)/3
// }

// console.log(calc(44,23,71));

// Arrow function

// const calcAverage  = (a,b,c)=> (a+b+c)/3;

// //Test 1
// let avgDolhins = calcAverage(44,23,71);//46
// let avgKoalas = calcAverage(65,54,49)//56

// //Test 2
//  avgDolhins = calcAverage(85,54,41);
//  avgKoalas = calcAverage(23,34,27);

// console.log(avgDolhins,avgKoalas);

// //A team ONLY wins if it has at least DOUBLE the average score of the other team
// function checkWinner(avgDolhins,avgKoalas) {
//   if(avgDolhins >= avgKoalas*2){
//     console.log(` Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
//   }else if (avgKoalas >= avgDolhins*2 ){
//     console.log(` Koalas win (${avgKoalas} vs. ${avgDolhins})`);
//   } else {
//     console.log("No one wins");
//   }

// }
// checkWinner(avgDolhins, avgKoalas);

//scoreDolphins = calcAverage(85, 54, 41);
//scoreKoalas = calcAverage(23, 34, 27);
//console.log(scoreDolphins, scoreKoalas);
//checkWinner(scoreDolphins, scoreKoalas);

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
TEST DATA: 125, 555 and 44
HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
GOOD LUCK 😀
*/
//test1

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

//object

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYeah: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,
  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }
  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }
//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },
//   getSummary: function(){
//     return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense? 'a': 'no'} driver License`
//   }
// }
// console.log(jonas.getSummary());

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀
*/

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function(){
    this.BMI = this.mass / this.height ** 2 
    return this.BMI
  }
}

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function(){
    this.BMI = this.mass / this.height ** 2 
    return this.BMI
  }
}
mark.calcBMI()
john.calcBMI()
console.log(mark.BMI,john.calcBMI());

if(mark.BMI>john.BMI){
  console.log(`${mark.fullName}'s BMI(${mark.BMI}) is higher than ${john.fullName}'s BMI(${john.BMI})!`);
}else {
  console.log(`${john.fullName}'s BMI(${john.calcBMI()}) is higher than ${mark.fullName}'s BMI(${mark.calcBMI()})!`);
}

