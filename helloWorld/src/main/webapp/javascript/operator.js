// operator.js

// var iVal = window.prompt("값을 입력");
var iVal = 0;
console.log(iVal);
var numAry = [3, 9, 20, 14, 8, 22];

var sum = 0;

for(var num of numAry){
    console.log(num);
    if(num % 2 == 0) {
        sum += num;
    }
    if(num === parseInt(iVal)) {
        break;
        // 비교연산자 == 외에 자바 스크립트는 " === " 3개짜리가 있따
        // 값과 + 타입까지 같은지 비교한다. 
    }
}
    //if()

console.log(`합계)는 ${sum}`);10

console.log(3 + '5' + (3 + 4));

var sum_2 = 0;
//2의 배수만 담을 변수

var sum_3 = 0;
//3의 배수만 담을 변수

var sum_23 = 0;
//2,3의 배수 공통된 배수들 (ex 6, 12)
for(var i= 1; i< 20; i++) { 
    if(i % 6 == 0) {
        sum_23 += i;
    } else if(i % 3 == 0) {
        sum_3 += i;
    } else if (i % 2 == 0) {
        sum_2 += i;
    }
}

console.log(`2의 배수 합계 : ${sum_2}`);
console.log(`3의 배수 합계 : ${sum_3}`);
console.log(`2와 또는 3의 배수 합계 : ${sum_23}`);
