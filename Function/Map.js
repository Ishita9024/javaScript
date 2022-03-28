//MAP

// a=[1,2,3,4,5,6]
// b=a.map(function(e){
//     return e+2          // By using simple function
// })
// console.log(b);

// b=a.map((e)=>
//     e
// )
// console.log(b);    // By using arrow function



// n=[1,2,3,4]
// m=["a","b","c","d"]
// dic={}
// for (i in n){
//     dic[n[i]]=m[i]

// }
// console.log(dic);



// var A = ['a', 'b', 'c','d'];
// var B = [1,2,3,4]

// var obj = {};
// A.forEach((key, i) => obj[key] = B[i]);

// console.log(obj);


// let str=["a","b","c","d",]
// let nums=[1,2,3,4]
// let obj={}
// for(let i in str){
//     obj[str[i]]=nums[i]
// }
// console.log(obj);


// var a=["a","b","c","d",]
// var b=[1,2,3,4]
// result {a:1,b:2,c:3,d:4}
// var s={}
// var d=a.map((e,i)=>{
//     s[e]=b[i]
// })
// console.log(s)


// var a = ["a", "b", "c", "d"];
// var b= [1,2,3,4];
// var r =  b.reduce(function(r, j, i) {
//   r[a[i]] = j;
//   return r;
// }, {})

// console.log(r);


// var a=[1,2,3,2,1,4,5,1,3]
// var d=[]
// var h=a.map((e)=>{
//     if (!d.includes(e)){
//         d.push(e)
//     }
// }
// )
// console.log(d)



// const a=[1,2,3,2,1,4,5,1,3]
// result [1,2,3,4,5]
// const b=[]
// for (i of a){
//     if(!b.includes(i)){
//         b.push(i)
//     }
// }
// console.log(b)

