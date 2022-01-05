//2022-01-05 // function 

function addNumber(n1, n2) {
    var sum = n1 + n2;
    console.log(`합계는 ${sum}`);
}
//펑션 기능을 정의하고 -> 밑에서 호출합니다. 
addNumber(5, 10); // 함수 호출시 함수이름에 '()'를 붙임? 5와 10은 => n1, n2의 값

//
function showNumber(yourName, yourScore) {
    document.write(`<p>이름 : ${yourName}, 
                    점수 : ${yourScore}
                    나이 : ${birth}
                    </p>`);
}

var yourName = "최경식";
var yourScore = 88;
var birth = 2002
showNumber(yourName, yourScore, birth); // 함수 호출

//

function showInfo(yourName, birth) {
    var today = new Date();
    document.write(`<p> ${yourName}의 올해 나이는 ${age} 입니다. 
    </p>`)
}

//나이 계산 
var age = today.getFullYear - student.birth;
//나이 함수 호출

//
var students = [{
    studentName: '홍길동',
    score: 80,
    birth: 2001
}, {
    studentName: '김민수',
    score: 90,
    birth: 1999
}, {
    studentName: '박이현',
    score: 85,
    birth: 1995
}];

//of라고 하여 배열에 배열된 만큼 실행하는 향상된 for문
for (var student of students) {
    showNumber(student.studentName, student.score, student.birth);
}

for(var student of students) {
    showInfo(student.studentName, student.scorescore, student.birth, student.age) 
}