import animals, { useAnimals } from "./data.js";

//DESTRUCTURE ARRAYS
console.log(animals);
const [cat, dog] = animals;

// console.log(cat)

//DESTRUCTURING OBJECTS
// const {name,sound} = cat;

// console.log(name)

// const { name:catName, sound: catSound} = cat //This gives a different name to the variables other than the key names in the object. USeful when you dont want to use the key names as the new destructures variable names.

// const { name = "Fluffy", sound = "Purr"} = cat  //This gives the variables name and sound a default value in case the original object don't have a value for these keys.

//const {name,sound,feedingRequirements: {food, water}} = cat;  //This descturcture the contents of the object within an object called feedingRequiremnts.this way both food and water get their own variables.

// const {feedingRequirements:{food, water}} You dont have to destructure the whole object, you can do only the parts that interest you.
// console.log(feedingRequirements)

console.log(useAnimals(cat)); //This logs an array with 2 items, the string cat and a function.

//destructure useAnmimals
const [animal, makeSound] = useAnimals(cat);

console.log(animal); //prints cat
makeSound(); //return meow

// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
