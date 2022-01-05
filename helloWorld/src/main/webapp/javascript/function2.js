// function2.js

function addNumber(first, last) {
    var sum = first + last;
    return sum;
}

var result1 = addNumber(10, 20);
var result2 = addNumber(15, 25);
var result3 = addNumber(addNumber(10, 20), addNumber(15, 25));
console.log(`1번: ${result1}, 2번: ${result2}`);
console.log(`총합 : ${result3}`)
//

function sumBetweenNum(first, last, num) {
    // 첫번쨰 매개갑과 - 두번째 매개값의 사이의 값을 합.
    // for(var i=1; i<10; i++){
    //     sum += i;
    // }

    var sum = 0;
        for (var i = first; i < last; i++) {
            if (i % num == 1)
                sum += i;
        }
    return sum;
}

// var sum = sumBetweenNum(1, 0) + sumBetweenNum(0, 10);
console.log(sumBetweenNum(10, 20, 2));
console.log(sumBetweenNum(10, 21, 3));