let name={
    fname:"sagarika",
    lname:"shende",
    fullname:function(){
        return (this.fname+""+this.lname)
    }
}

let name2={
    fname:"ishu",
    lname:"aggarwal"
}
console.log(name.fullname.call(name2));