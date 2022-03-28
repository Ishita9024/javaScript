// It can be used in array as well as object.

a=[1,2,3,4,5]
console.log({...a});
console.log(...a);
console.log([...a]);

// //ES5                                      
// function sum(a,b,c){
//     console.log(a+b+c);
// }
// var arr=[1,2,3]
// sum.apply(null,arr)

// //ES6
// function sum(a,b,c,d){
//     console.log(a+b+c+d);
// }
// var arr=[1,2,3,8,9]
// sum(...arr)

// //Replace concat
// var arr1=[1,2,3,4]
// var arr2=[3,4,5,67]
// arr=arr1.concat(arr2)
// console.log(arr);

// var arr1=[1,2,3,4]
// var arr2=[3,4,5,67]
// var arr3=[4,5,6,7]
// arr1=[...arr1,...arr2,...arr3]

//Replace copy
var arr1=[1,2,3,4]
var arr2=[3,4,5,67]
console.log(...arr2,...arr1);
arr=[...arr1,5,6,...arr2]
console.log(arr);


