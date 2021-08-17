let money = document.querySelector("#money");
let click = document.querySelector("#click");
let moneyValue = 0;
let clickValue = 1;

function addMoney(money){
    moneyValue++;
    money.innerHTML = moneyValue;
}