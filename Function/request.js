var fs = require("fs")
var axios =require("axios");
var readline = require("readline-sync");
const url_api="https://api.merakilearn.org/courses";
data=axios.get(url_api)
.then(Response=>{
    let data1 = (Response.data)
    let fetch= fs.writeFileSync("courses.json",JSON.stringify(data1,null,3))
    // loop for courses
    serial_number=1
    for(i of data1){
        console.log(`${serial_number}. ${i['name']}  : ${i['id']}`);
        serial_number+=1
    }
    var input = readline.question("Enter the course number:")
    console.log(`${data1[input-1]['name']}`);
    course_id = data1[input-1]['id']
    const url="http://api.merakilearn.org/courses/"+course_id+"/exercises";
    exercise_data=axios.get(url)
    .then(Response=>{
        var data2 = Response.data
        var data3 = JSON.stringify(data2,null,2)
        fs.writeFileSync("sub_topics.json",data3)

    serial_number2=1
    serial_number1=1
    serial_number3=1
    var list1=[]
    var list2=[]

for(j of data2['course']['exercises']){
    if (j['parent_exercise_id'] == null){
        console.log(`${serial_number1}. ${j['name']}`) //Loop to get the parent exercise name and slug
        console.log(`   ${serial_number3}. ${j['slug']}`)
        serial_number1+=1
        serial_number2+=1
        list1.push(j)
        list2.push(j)
        continue
    }
    if(j["parent_exercise_id"]==j["id"]){
        console.log(`${serial_number2} ${j["name"]}`)
        serial_number2+=1
        new_no=1
        list1.push(j)
    }
    
    // list1.push(j)
    for (x of data2["course"]["exercises"]){
        if(j["parent_exercise_id"]!=j["id"]){
            console.log(`   ${new_no} ${j["name"]}`)
            new_no+=1
            list2.push(j)
            break
            } 
    }
}
let fetch= fs.writeFileSync("parent.json",JSON.stringify(list1,null,3))
var Parent = readline.question("Enter the parent number:")
for(var k in list1){
    if(list1[k]["parent_exercise_id"] == list1[k]["id"]){
    console.log(list1[Parent-1]['name']);
    console.log(`   ${list1[Parent-1]['slug']}`);
    break
    }
    else{
        var num=(list1[Parent-1]["id"])
        list3=[]//var
        list4=[]  //var3
        new_no1=1
        for(n of list2){
            if(n["parent_exercise_id"]== num){
                console.log(`   ${new_no1} ${n["name"]}`);
                list3.push(n["name"])
                // console.log(list3)
                // for (var i=0;i<n["content"];i++){
                //         console.log(i["value"])
                //     }
                list4.push(n["content"]["value"])
            //    console.log(list4); 
                new_no1+=1
                // break
            }
            else{

            }
        
        
    }
}
}
        // else{
        // var num=(list1[Parent-1]["id"])
        // list3=[]//var
        // list4=[]  //var3
        // new_no1=1
        // for(n of list2){
        //     if(n["parent_exercise_id"]== num){
        //         console.log(`   ${new_no1} ${n["name"]}`);
        //         list3.push(n["name"])
        //         // console.log(list3)
        //         // for (var i=0;i<n["content"];i++){
        //         //         console.log(i["value"])
        //         //     }
        //         list4.push(n["content"]["value"])
        //     //    console.log(list4); 
        //         new_no1+=1
        //     }
        // }
//         var child=readline.question("Enter the child exercise do u want :");
//         new_no2=1
//         for(s in length.list3){
//             if (child == new_no2){
//                 console.log(list3[s]);
//                 console.log(list4[s]);
//                 new_no2+=1
//                 } 
//         }

//     }
//     }
 
    })
})