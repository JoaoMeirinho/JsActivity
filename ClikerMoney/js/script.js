        const money = document.querySelector("#money");
        const click = document.querySelector("#click");
        const upgrade = document.querySelector('#button-upgrade');
        const boost = document.querySelector('#button-boost')
        let moneyValue = 0;
        let clickValue = 1;
        let upgradeValue = 10;
        let boostValue = 1000;
        let boostUpgradeValue = 10;
        
        const listValues = () =>{
            money.innerHTML = 'R$'+ moneyValue.toFixed(2);
            upgrade.innerHTML = `Buy upgrade (R$ ${upgradeValue.toFixed(2)}) `
            click.innerHTML = `MORE MONEY (R$${clickValue.toFixed(2)})`;
            boost.innerHTML = `Buy Boost (R$${boostValue.toFixed(2)})`;
        }

        function addMoney(money){
            moneyValue += clickValue;
            money.innerHTML = 'R$'+ moneyValue.toFixed(2);
        }
        function buyUpgrade(){
            if (moneyValue >=upgradeValue ) {
                moneyValue -= upgradeValue;
                clickValue *= 1.5;
                upgradeValue*=1.6;
                listValues();
            }
        }
        const buyBoost = () =>{
            if (moneyValue >= boostValue){
                moneyValue -= boostValue;
                clickValue *= boostUpgradeValue;
                boostValue *= 10;
                listValues();
            }
        }

         boost.addEventListener('click', buyBoost);
        