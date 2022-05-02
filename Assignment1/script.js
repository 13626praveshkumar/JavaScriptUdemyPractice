// LECTURE: Values and Variables
let country = "India";
let continent = "Asia";
let population = 130;

console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types
let isIsland = false;
let language;

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

// LECTURE: let, const and var
language = "Hindi";
const BIRTHYEAR = 1994;
population = 120;
console.log(language);
console.log(BIRTHYEAR);
console.log(population);

// LECTURE: Basic Operators

console.log("Half population : " + population / 2);
population++;
console.log("Increase population by 1 : " + population);
console.log(`is population greater than 6M : ${population > 6}`);
console.log(
  `is population greater than average population : ${population > 33}`
);
let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

//Type Conversion
let birth = "1994";
console.log(Number(birth) + 27);
console.log(Number("Pravesh")); //output=> NaN( means Not a number)
console.log(typeof NaN);

//Type coercion
console.log("23" + "10" + 3); // 23103 (+ concatenate)
console.log("23" - "10" - 3); // 10   (- convert to number)
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log(12 - 3 - 4 - "4");

// Very Important
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 157);
console.log(5 + 6 + "4" + 9 - 4 - 2);

//Falsy values : 0,'',undefined ,null,NaN

//==(loose)
let numNeighbours = prompt("enter your neighbours Number");
if (numNeighbours == 1) console.log("Only 1 border!");
else if (numNeighbours > 1) console.log("More than 1 border");
else console.log("No borders");

// Strict (===)
let numNeighbours1 = Number(prompt("enter your neighbours Number"));
if (numNeighbours1 == 1) console.log("Only 1 border!");
else if (numNeighbours1 > 1) console.log("More than 1 border");
else console.log("No borders");

// LECTURE: The switch Statement
let language1 = "kannada";
switch (language1) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

// LECTURE: The Conditional (Ternary) Operator
population = 32;
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
