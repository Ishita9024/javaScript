const myArray=[0,1,3,0,4,0,0,5];
Zero_array=[]
newArray=[]
for (var i=0; i<myArray.length;i++){
    if (myArray[i]==0){
        Zero_array.push(myArray[i])
    }
    else{
        newArray.push(myArray[i])
    }
}
for (var j=0;j<Zero_array.length;j++){
    newArray.push(Zero_array[j])
}
console.log(newArray)
