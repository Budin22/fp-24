'use strict';


const calc = () => {
    let secondNum = [];
    let step = 0;
    const palindrom = (num) => {
        for(let i = 0; i < num.length; i++) {
            secondNum[i] = num[num.length-1-i];
        }
        let result = num;
        if(num === secondNum.join('')) {
            return {
                result,
                step
            }
        }
        if(num !== secondNum.join('')) {
            result = `${Number(num) + Number(secondNum.join(''))}`;
            step += 1;
            return palindrom(result);
        }
    }
    return {
        palindrom
    }
}

let foo = calc();
console.log(foo.palindrom('95'));