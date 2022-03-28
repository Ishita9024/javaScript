const getRollno=()=>{
    setTimeout(()=>{
        console.log("API getting roll no.");
        let rollNo=[1,2,3,5,56];
        console.log(rollNo);

        setTimeout((rollno)=>{
            const biodata={
                name:"ishu",
                age:21
            }
            console.log(`My rollno is ${rollno}.My name is ${biodata.name} and I am ${biodata.age} years old.`);

            setTimeout(()=>{
            biodata.gender="female"
            console.log(`My rollno is ${rollno}.My name is ${biodata.name} and I am ${biodata.age} years old.I am a ${biodata.gender}`);

            },2000)
        },2000,rollNo[3])
    },2000)
}
getRollno()

