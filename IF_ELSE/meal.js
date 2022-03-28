const readline_sync=require("readline-sync")
var day=readline_sync.question("enter the day :");
var meal=readline_sync.question("enter the meal :");
switch(day){
    case "monday":
        switch(meal){
        case "breakfast":
            console.log("poha");
            break;
        case "lunch":
            console.log("dal roti");
            break;
        case "dinner":
            console.log("pulav");
            break;
        }
        break;
    case "tuesday":
        switch(meal){
        case "breakfast":
            console.log("chilla");
            break;
        case "lunch":
            console.log("idli sambhar");
            break;
        case "dinner":
            console.log("rajma chawal");
            break;
        }
        break;
    case "wednesday":
        switch(meal){
        case "breakfast":
            console.log("maggi");
            break;
        case "lunch":
            console.log("fried idli");
            break;
        case "dinner":
            console.log("daaliya");
            break;
        }
        break;
    case "thursday":
        switch(meal){
        case "breakfast":
            console.log("oats");
            break;
        case "lunch":
            console.log("chole chawal");
            break;
        case "dinner":
            console.log("roti sabzi");
            break;
        }
        break;
    case "thursday":
        switch(meal){
        case "breakfast":
            console.log("oats");
            break;
        case "lunch":
            console.log("chole chawal");
            break;
        case "dinner":
            console.log("roti sabzi");
            break;
        }
        break;
    case "friday":
        switch(meal){
        case "breakfast":
            console.log("fried rice");
            break;
        case "lunch":
            console.log("uttpam");
            break;
        case "dinner":
            console.log("aloo parantha");
            break;
        }
        break;
    default:
        console.log("free food");
        break;

}