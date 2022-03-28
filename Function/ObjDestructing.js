// 1. Assigning to existing variable names
// var employee = {    // Object we want to destructure
//     firstname: 'Jon',
//     lastname: 'Snow',
//     dateofbirth: '1990'
// };

// // // Destructuring the object into our variables
// var { firstname, lastname, dateofbirth } = employee;
// console.log( firstname, lastname, dateofbirth);


// // //2. Assigning to new variable names
// var employee = {    // Object we want to destructure
//     firstname: 'Jon',
//     lastname: 'Snow',
//     dateofbirth: '1990'
// };

// // // // Destructuring the object into variables with
// // // // different names than the object variables
// var { firstname: fn, lastname: ln, dateofbirth: dob } = employee;
// console.log( fn, ln, dob);

// //3. Assigning to a variable with default values
// var employee = {    // Object we want to destructure
//     firstname: 'Jon',
//     lastname: 'Snow',
//     dateofbirth: '1990'
// };

// // Destructuring the object into variables without 
// // assigning default values 
// var { firstname, lastname, country } = employee;
// console.log("Without setting default values")
// console.log( firstname, lastname, country);

// // // Destructuring the object into variables by 
// // // assigning default values 
// var { firstname = 'default firstname', 
//       lastname = 'default lastname', 
//       country = 'default country' } = employee;
// console.log("\n After setting default values")
// console.log( firstname, lastname, country);


// let arr = [12, 23, 45];
// let [a, b, c, d] = arr;
// console.log(c)

// Coventional way of extracting properties of objects 

// let obj = { Name: 'Superman', Powers: ['Flight', 'X-Ray Vision']};
// Name = obj.Name;
// Powers = obj.Powers;

//Object Destructuring
// let obj = { Name: 'Superman', Powers: ['Flight', 'X-Ray Vision'],1:34,fghj:7890};
// const {Powers,Name} = obj;
// console.log(Powers,Name);


