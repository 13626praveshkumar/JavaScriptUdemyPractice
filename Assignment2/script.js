"use strict";

//function practice

function logger() {
  console.log("My name is pravesh");
}

//calling function
logger();
logger();
logger();

function fruitjuice(apple, orange) {
  console.log(apple, orange);
  const juice = `Juice with ${apple} apples and ${orange} oranges juice`;
  return juice;
}

console.log(fruitjuice(5, 1));
console.log(fruitjuice(3, 2));

//function declaration    can be called before and after initialization

console.log(calAge(1994));

function calAge(birthYear) {
  return 2037 - birthYear;
}

console.log(calAge(1991));

// function expression   can only be called after initialization

// console.log(calAge2(1996)); error as called before initialization

const calAge2 = function (birthyear) {
  return 2037 - birthyear;
};

console.log(calAge2(1996));

// Arrow function
// arrow function will not work with this keyword
// return happen implicitly for one line code
const calAge3 = (birthYear) => 2037 - birthYear;
console.log(calAge3(2000));

// one parameter multiple line of codes
const calRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  return 65 - age;
};

console.log(`retirement will happen after ${calRetirement(2000)} years`);

// multiple parameter and multiple lines of code
const calRetirement2 = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName}  will retire after ${retirement} years`;
};

console.log(calRetirement2(2002, "Pravesh"));

// Introduction to Arrays
const friends = ["Mayank", "Shikhar", "Suyash", "Abhishek"];
console.log(friends);

friends[2] = "ABC"; //allowed even friends is const
// friends=['xyx','jhh'] // not allowed as friends is const
const years = new Array(2001, 2002, 2003, 2004);
console.log(years[0]);
console.log(friends[0]);

console.log(friends.length);
const name1 = "Pravesh";
// very important array can have hetrogenous values
const newArr = [name1, "ABC", "DEF", 2037 - 1992, friends];
console.log(newArr);

// Array Basic functions
const friends1 = ["Mayank", "Shikhar", "Suyash", "Abhishek"];

//Add elements
friends1.push("sushil"); //add at last
console.log(friends1);
console.log(friends1.length);

friends1.unshift("Rohit"); // add at the begining
console.log(friends1);

//Remove element
friends1.pop(); // remove last element
const popped = friends1.pop();
console.log(friends1);

friends1.shift(); //Remove first element
console.log(friends1);

console.log(friends1.indexOf("Shikhar"));

friends1.push(23);
console.log(friends1.includes("Suyash"));
console.log(friends1.includes("Vikalp"));
console.log(friends1.includes("23")); //false ccomparison will be strict

//OBJECT

const person = {
  firstName: "Pravesh",
  lastName: "Kumar",
  age: 2022 - 1994,
  job: "SE",
  friends: ["Sushil", "Rohit", "Shashank"],
};

console.log(person);

//Dot vs Bracket Notation
console.log(person.lastName);
console.log(person["lastName"]);

const namekey = "Name";
console.log(person["first" + namekey]);
console.log(person["last" + namekey]);

const interested = prompt(
  "what do you want to know about person?Choose between firstName,lastName,job,age,friends"
);
if (person[interested]) console.log(person[interested]);
else console.log("incorrect  choice");

//How to add new values in object
person.location = "India";
person["email"] = "praveshkumar@gmail.com";
console.log(person);

//Object Methods
const jonas = {
  firstName: "Pravesh",
  lastName: "Kumar",
  birthYear: 1994,
  job: "SE",
  friends: ["Sushil", "Rohit", "Shashank"],

  calAge: function (birthYear) {
    return 2022 - birthYear;
  },

  calAge2: function () //use of this keyword
  {
    console.log("this keyword demo");
    console.log(this);
    return 2022 - this.birthYear;
  },

  calAge3: function () //use of this keyword
  {
    console.log("this keyword demo with creating a member in object");
    this.age = 2022 - this.birthYear;
    return this.age;
  },
};

console.log(jonas.calAge(1994));
console.log(jonas["calAge"](1994));

console.log(jonas.calAge2());

console.log(jonas.calAge3());
console.log(jonas.age);

//Iteration for the loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights repetition ${rep}`);
}

//looping arrays,breaking,continue

const newArr1 = [name1, "ABC", "DEF", 2037 - 1992, friends];
for (let i = 0; i < newArr.length; i++) {
  console.log(newArr1[i], typeof newArr1[i]);
}

//continue demo  =>will continue the next iteartion
for (let i = 0; i < newArr.length; i++) {
  if (typeof newArr1[i] !== "string") continue;
  console.log(newArr1[i], typeof newArr1[i]);
}

// while loop
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) console.log("loop is about to end");
}

const x = "23";
if (x == 23) console.log(23);

console.log("assd");
