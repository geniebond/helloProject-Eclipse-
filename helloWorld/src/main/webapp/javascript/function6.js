// function6.js
//2022-01-05

// let sum = function sum (a, b) {
//     return a+b;
// }
//위는 펑션 정의식

//아래는 펑션 표현식
let sum  = function(first, last) {
    return first + last;

}

let anotherSum = sum;


console.log(sum(10, 20));
console.log(anotherSum(30,40));

// let getMinVal = function(first, last) {

        // let getMinVal = (first, last) => first > last ? last : first; 


        let getMinVal = (first, last) => {
            return first > last ? last : first; 
        
    //  arrow 펑션=>를 이용해서 결과값을 설정해서 -> {} 구문을 실행하세요 라는 뜻/

    // if(first > last){
    //     result = last;
    // } else {
    //     result = first;
    // }

    // var result = first > last ? last : first;
    // 해당 3항 연산자를 맨 위의 계산식에 저렇겓 가능하다.

    // return result;

        }
console.log(getMinVal(10, 5));
        