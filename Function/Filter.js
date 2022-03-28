//FILTER

// var arr=[1,3,5,86,57]
// var arr1=arr.filter(x=>x>30)
// console.log(arr1);

student=["kumar","nayak","ishu","sanju","kajal"]
var filt=student.filter(function(e){
    return (e.includes("k"))            // By using function
})
console.log(filt);

s=student.filter((e)=>{
    if (e.includes("k")){
        return e                        // By using arrow function
    }
})
console.log(s);

s=student.filter((e)=>
    e.includes("k")? e:null
)                                     // Ternary operator
console.log(s);

s=student.filter((e)=>
    e.includes("k")&& e
)
console.log(s);                          //  Shorthand Method `



