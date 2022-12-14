let billTotalInput = document.getElementById("billTotalInput");
let tipInput = document.getElementById("tipInput");
let perPersonTotal = document.getElementById("perPersonTotal");
let numberOfPeople = document.getElementById("numberOfPeople");
let resetCalcBtn = document.getElementById("resetCalcBtn");
let totalBillTitle = document.getElementById("totalBillTitle");

numberOfPeople.innerText = 1;
let currNumOfPeople = Number(numberOfPeople.innerText);

function calculateBill() {
  let totalBillInput = Number(billTotalInput.value);
  let tipPercentage = Number(tipInput.value);
  let overallBill =
    (totalBillInput + (tipPercentage / 100) * totalBillInput) / currNumOfPeople;
  overallBill.toFixed(2);
  perPersonTotal.innerText = `$${overallBill.toFixed(2)}`;
}

function increasePeople() {
  currNumOfPeople++;
  numberOfPeople.innerText = currNumOfPeople;
  if (currNumOfPeople > 1) {
    totalBillTitle.innerText = "Total per Person";
  } else {
    totalBillTitle.innerText = "Total Bill";
  }
  calculateBill();
}
function decreasePeople() {
  if (currNumOfPeople <= 1) {
    return;
    // currNumOfPeople = 1;
    // numberOfPeople.innerText = 1;
  }

  currNumOfPeople--;
  numberOfPeople.innerText = currNumOfPeople;
  if (currNumOfPeople > 1) {
    totalBillTitle.innerText = "Total per Person";
  } else {
    totalBillTitle.innerText = "Total Bill";
  }

  calculateBill();
}

function resetCalculator() {
  numberOfPeople.innerText = 1;
  currNumOfPeople = Number(numberOfPeople.innerText);
  tipInput.value = "";
  billTotalInput.value = "";
  overallBill = 0;
  perPersonTotal.innerText = `$0.00`;
  totalBillTitle.innerText = "Total Bill";
}
