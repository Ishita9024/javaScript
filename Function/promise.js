var num_list = (()=>{
    var list = [2,4,6,98,7,6,234,6,74,2,457,64];
    return new Promise((resolve,reject)=>{
    let even = [];
    let odd = [];
    var i = 0;
    while(i<list.length){
        if(i%2==0){
            even.push(i);
            resolve(even);
        }
        else{
            odd.push(i);
            reject(odd);
        }
        i++;
    };
    })
    .then((message)=>{
        console.log(message+" even");
    })
    .catch((message)=>{
        console.log(message+" odd");
    });
 });
num_list();

