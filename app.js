const arr = [];
const obj = {};

const person = {
  firstName: "Pablo2",
  //   where: "Pirineus",
  //   speaks: ["English", "Castellano", "Catalan", "French"],
  length: "1.87",
};

arr[0];

// console.log(person.firstName);

const chris = "firstName";

person.firstName;
person["firstName"];
person[chris];
person.length;

// word -> definition
// key value pairs

// To Loop Over An Object
// We CANNOT loop using a normal for loop
// We CANNOT loop using a for...of lop

for (let variableName in person) {
  //   console.log(variableName, person[variableName]);
  console.log("-------------------------");

  console.log("name of the variable: variableName");
  console.log("value of variableName: ", variableName);
  console.log(
    "get the value : person[variableName]. same as writing person.",
    variableName
  );
  console.log("the value itself: ", person[variableName]);
  console.log("-------------------------");
}

function sayHiToUser(user) {
  return `Hi, ${user.firstName}`;
}

const user2 = {
  firstName: "Cheryl",
  where: "Dresden",
  speaks: ["English", "Mandarin", "Taiwanese"],
  length: "2.46",
};

// console.log(sayHiToUser(person));
// console.log(sayHiToUser(user2));
