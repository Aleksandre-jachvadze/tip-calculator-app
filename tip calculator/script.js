let billInput = document.querySelector(".bill");
let peopleInput = document.querySelector(".people");
let buttons = document.querySelectorAll(".select-btn button");
let customInput = document.getElementById("custom-tip");
let tipAmount = document.querySelector("#tip");
let getTotal = document.querySelector("#total");
console.log("CUSTOM INPUT: ", customInput);

let reset = document.querySelector(".reset");

let billValue = 0;
billInput.addEventListener("input", function () {
  billValue = parseInt(billInput.value);
  console.log("Bill:", billValue);
  calculate();
});

let peopleValue = 1;
peopleInput.addEventListener("input", function () {
  peopleValue = parseInt(peopleInput.value);
  console.log("Number of People:", peopleValue);
  calculate();
});

reset.addEventListener("click", function () {
  billInput.value = 0;
  peopleInput.value = 1;

  buttons.forEach((btn) => {
    btn.style.backgroundColor = "";
  });

  customInput.value = 0;
  tipAmount.textContent = `$0.00`;
  getTotal.textContent = `$0.00`;
});

let percentValue = 0;
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    buttons.forEach((btn) => {
      btn.style.backgroundColor = "";
    });

    button.style.backgroundColor = "#26c2ae";

    percentValue = parseInt(event.target.textContent);
    console.log("Button clicked:", percentValue);
    calculate();
  });
});

customInput.addEventListener("change", (event) => {
  percentValue = Number(event.target.value);
  calculate();
});

function calculate() {
  let tip =
    (parseInt(billInput.value) * percentValue) /
    100 /
    parseInt(peopleInput.value);

  let total = parseInt(billInput.value) / parseInt(peopleInput.value) + tip;
  console.log(
    "billValue is: ",
    parseInt(billInput.value),
    "tip is: ",
    tip,
    "peopleValue is :",
    peopleValue
  );
  console.log(percentValue);
  if (billInput.value && peopleInput.value && percentValue && tip != Infinity) {
    tipAmount.textContent = `$${tip.toFixed(2)}`;
    getTotal.textContent = `$${total.toFixed(2)}`;
  } else {
    tipAmount.textContent = `$0.00`;
    getTotal.textContent = `$0.00`;
  }
}