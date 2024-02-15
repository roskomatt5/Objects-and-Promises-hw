//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
let person3 = {
  pizza: ["Deep Dish", "South Side Thin Crust"],
  tacos: "Anything not from Taco bell",
  burgers: "Portillos Burgers",
  ice_cream: ["Chocolate", "Vanilla", "Oreo"],
  shakes: [
    {
      oberwise: "Chocolate",
      dunkin: "Vanilla",
      culvers: "All of them",
      mcDonalds: "Sham-rock-shake",
      cupids_candies: "Chocolate Malt",
    },
  ],
};
function parser(obj) {
  let result = [];
  for (let i = 0; i < Object.keys(obj).length; i++) {
    if (typeof Object.entries(obj)[i][1][0] === "string") {
      result.push(
        `This persons favorite ${Object.keys(obj)[i]} is/are: ${
          obj[Object.keys(obj)[i]]
        }`
      );
    } else {
      for (
        let j = 0;
        j < Object.keys(Object.entries(obj)[i][1][0]).length;
        j++
      ) {
        let curr_key = Object.keys(Object.entries(obj)[i][1][0])[j];
        let curr_value = Object.values(Object.entries(obj)[i][1][0])[j];
        result.push(
          `This persons favorite ${
            Object.keys(obj)[i]
          } is/are: ${curr_value} from ${curr_key}`
        );
      }
    }
  }
  return result.join("\n");
}

let res = parser(person3);

console.log(res);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Human(name, age) {
  this.name = name;
  this.age = age;

  this.printInfo = () => {
    console.log(`Name: ${this.name}, Age:${this.age}`);
    return this;
  };

  this.addAge = () => {
    this.age++;
    return new Human(this.name, this.age);
  };
}

let andy = new Human("Andy", 36);
let matt = new Human("Matt", 26);

console.log(andy.addAge().printInfo());
console.log(andy.addAge().printInfo());
console.log(matt.addAge().printInfo());

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const isBigWord = (str) => {
  return new Promise((resolve, reject) => {
    if (str.length > 10) {
      resolve(true);
    } else {
      reject(false);
    }
  });
};

///USING PROMISE
isBigWord("abcdefghitk")
  //happy (true)
  .then((result) => {
    console.log(`Big Word`);
  })
  //sad (false)
  .catch((error) => {
    console.log(`Small Number`);
  });
