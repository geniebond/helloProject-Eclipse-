// basic2.js

'use strict'

var fruits = ['Apple', 'Banana', 'Cherry'];
var str = '<ul>';
//document.write('<ul>');
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    //document.write('<li>' + fruits[i] + '</li>');
    //str += '<li>' + fruits[i] + '</li>';
    str += `<li>${fruits[i]}</li>`;
}
//document.write('</ul>');
str += '</ul>';
// 위에 랭스는 -> frutis 배열 수만큼 3이 된다.

document.write(str);

//
var numbers = [10, '20', 30, 40];
// 10 + '20' => 자바스크립트는 자바와 다르게 덜 엄하게 계산해준다? => 1020 
console.log(numbers.length);
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    //sum += numbers[i];
    sum += parseInt(numbers[i]); // 문자값 -> 숫자 변환 자바의 Interger.parseint 비슷함
}
console.log(` 합계 : ${sum}`);

//

var student1 = {
    name: 'hong',
    age: 20,
    score: 80
};
// var s1Name = 'hong';
// var s1Age = 20;
// var s1Score = 80;
//위 3개의 변수를 =>studen1에 의미 있는 값들을 한꺼번에 묶어버림 -> 처리가 편함

for(var field in student1) {
    console.log(field, student1[field]);
    // 위의 for var -- in 은 중요하니 기억해둘것/ for..in -> object의 필드 속성을 반복.
// sttuden1의 필드 3가지를 -> 가져와서 저장한다는 뜻 / 변수가 가지고있는 필드의이름을 불러옴
}

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.age);
//위의 for-in field를 안쓰면 위처럼 계속 반복해야하는 업무 어러움이 생긴다?


var student2 = {
    name: 'hwang',
    age: 22,
    score: 83
};

var student3 = {
    name: 'park',
    age: 32,
    score: 85
};

var students = [student1, student2, student3];

str = '';
str += '<table border="1">';
str += '<thead><tr>';
for(var field in student1) {
    str += `<th>${field}</th>`;
}
str += '</tr></thead>';
str += '<tbody>';

for (var i = 0; i < students.length; i++) {
    var field = 'score';
    console.log(`name=> ${student1.name}`);
    //console.log(`age=> ${student1.age}` );
    console.log(`age=> ${student1['age']}`);
    // .연산자 말고도 요렇게도 가능 -> console.log(`age=> ${student1['age']}`);

    //console.log(`score=> ${student1.score}` );
    console.log(`score=> ${student1[field]}`);
    //요것도 변수 var field에 남고 요렇게도 가능함

    console.log(`${i+1}번째 name=> ${students[i].name}`);
    console.log(`${i+1}번째 age=> ${students[i]['age']}`);
    console.log(`${i+1}번째 score=> ${students[i][field]}`);
    //자바스크립트에선'배열 + 배열 메소드를' 많이 사용합니다.  위 student는 object타입 입니다.
    //그리고 또 위의 방법과 다르게 console.log를 사용해 보았습니다. 
    str += '<tr>';
    for(var field in student1) {
        str += `<td>${students[i][field]}</td>`;
    }
    str += '</tr>';

}
str += '</tbody>/table>';
document.write(str);