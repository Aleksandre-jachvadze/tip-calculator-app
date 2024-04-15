const bill = document.getElementById("bill")
const tip = Array.from(document.getElementsByClassName("tip"))
const people = document.getElementById("people")
const tipAmount = document.getElementById("tip-amount")
const totalAmount = document.getElementById("total-amount")
const resetButton = document.getElementsByClassName("reset")
const custom = document.getElementById("inputTip")

let billValue = 0
let tipValue = 0
let peopleInput = 0


custom.addEventListener("input", (event) => {
    tipValue = Number(event.target.value);
    tip.forEach((btn)=>{
    btn.style.color = "#fff";
    btn.style.backgroundColor = "#00474b";
    })
    tipAmaount()
})

bill.addEventListener("input", (event) => {
  
    billValue = Number(event.target.value)
    // console.log (typeof billValue)
    tipAmaount()
})
tip.forEach((button)=>{ 
    active = null 
    
button.addEventListener("click", (event)=>{
    if (active == null) {
tipValue = parseInt(event.target.innerText);

button.style.color = "#00474b";
button.style.backgroundColor = "#9fe8df"
active = button
custom.value = "";
tipAmaount()

   } else if (active != event){
    
    tipValue = parseInt(event.target.innerText);
    active.style.color = "#fff";
    active.style.backgroundColor = "#00474b";

    button.style.color = "#00474b";
    button.style.backgroundColor = "#9fe8df"

    active = button
    custom.value = "";
    tipAmaount()

   } else { 

    tipValue = parseInt(event.target.innerText);
    button.style.color = "#00474b";
    button.style.backgroundColor = "#9fe8df"
    active = null
    custom.value = "";
    tipAmaount()
   }
    })

})

people.addEventListener("input", (event)=>{
    peopleInput = Number(event.target.value)
    // console.log(peopleInput)
    tipAmaount()
})

function tipAmaount(){
    if (peopleInput !=0) {
        
        let resulTip = (billValue * tipValue/100)/peopleInput
        let resulrTotal = resulTip+billValue/peopleInput
        
        tipAmount.innerText = `${resulTip.toFixed(2)}`;
        totalAmount.innerText = `${resulrTotal.toFixed(2)}`;
    } 
    
    else {
        tipAmount.innerText = "0.00";
        totalAmount.innerText = "0.00";
    }
}
resetButton[0].addEventListener("click", ()=>{

    billValue = 0
    tipValue = 0
    peopleInput = 0

    tipAmount.innerText = "0.00";
    totalAmount.innerText = "0.00";
   

    bill.value = "";
    people.value = "";
    custom.value = "";

    tip.forEach ((btn)=>{
    btn.style.color = "#fff";
    btn.style.backgroundColor = "#00474b";
})
})
