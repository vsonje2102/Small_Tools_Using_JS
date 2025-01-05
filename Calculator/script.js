const result = document.getElementById("result")
const buttons = document.querySelectorAll(".btn button")

let currentIp = "";
let OperatorClicked = false;

buttons.forEach((btn) =>{
    btn.addEventListener("click",() => {
        const value = btn.getAttribute("data-value");
        if(value == "C"){
            currentIp = "";
            result.value = "";
        }
        else if(value == "="){
            try{
                currentIp = eval(currentIp).toString()
                result.value = currentIp;
            }
            catch(error){
                result.value = "Error";                
                currentIp = "";            
            }
        }
        else{
            if(["+","-","*","/"].includes(value) && OperatorClicked){
                return  // prevents consecutive opearators
            };        
            currentIp += value;
            result.value =currentIp;
            OperatorClicked = ["+","*","-","/"].includes(value);
        }
    });
});
