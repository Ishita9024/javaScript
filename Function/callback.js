//Simple function
//const funA=()=>{
//     console.log(`welcome to A`);
// }
// const funB=()=>{
//     console.log(`welcome to B`);
// }
// funA();
// funB();

// After applying SetTimeout
// const funA=()=>{
//     setTimeout(function(){
//         console.log(`welcome to A`);
//     },2000)
  
// }
// const funB=()=>{\
//     console.log(`welcome to B`);
// }
// funA();
// funB();


//Final callback
const perOne=(friend,callfrnd)=>{
    console.log(`call you ${friend} later`);
    callfrnd();
}
const perTwo=()=>{
    console.log(`Hey What's up`);
}
perOne("ishu",perTwo)
// perTwo()
