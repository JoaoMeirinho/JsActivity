const checaNum = num => {
    if(Number(num)){
        if (num >= 0 && num <= 100){
            if (num % 3 === 0 && num % 5 === 0 ){
                return 'FizzBuzz';
            }else if(num % 3 === 0){
                return 'Fizz';
            }else if(num % 5 === 0){
                return 'Buzz';
            }else{
                return num;
            }
        }
    }else{
        return num;
    }
}

console.log(checaNum('ops'))