console.log("Welcome to SBI Bank ATM")
console.log("Insert your ATM Card")
console.log()
const readline_sync=require("readline-sync")
var langugae=readline_sync.question("Select language-English or Hindi:");
if (langugae=="english"){
	var pin=readline_sync.questionInt("enter 4 digit pin:");
	if (pin!=1234){
        console.log("you entered wrong pin");
    }else if (pin==1234){
		var account=readline_sync.question("Choose what type of account do you have? Savings Account or Current Account:");
		if (account=="savings account"||account== "current account"){
			var withdrawalAmount=readline_sync.questionInt("enter the withdrawal amount");
			if (withdrawalAmount<=100000 && withdrawalAmount%100==0){
				console.log("collect your cash")
				console.log(" Thank you & Visit Again :)")
            }else{
				console.log("unsufficient amount")
            }
        }
    }
} else if (langugae=="hindi"){
	var pin=readline_sync.questionInt("chaar sankhaya ka pin daale:");
	if (pin!=1234){
        console.log("apny pin galat daala hai");
    }else if (pin==1234){
		var account=readline_sync.question("bachat khata hai yaa chalu khata hai :");
		if (account=="bachat khata "||account== "chalu khata "){
			var withdrawalAmount=readline_sync.questionInt("nikalane k liye rashi daale");
			if (withdrawalAmount<=100000 && withdrawalAmount%100==0){
				console.log("Apna cash jma kre")
				console.log("dhanyavad")
            }else{
				console.log("Paryapat rashi nhi h")
            }
        }
    }
				
}else{
	console.log("invalid language")
}