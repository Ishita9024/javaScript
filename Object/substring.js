var mainString="My name is kumar, and my friend’s name is Dhamu" 
var arr=mainString.split(" ")
var subString="is"
var count=0
for(var i=0;i<arr.length;i++){
    if (arr[i]=="is"){
        count++;
    }
    
}
console.log(count);

