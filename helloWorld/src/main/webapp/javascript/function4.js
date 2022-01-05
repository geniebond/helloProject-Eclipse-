// function4.js
//2022-01-05 

//function1에서 복사해옴
var students = [{
    studentName: '홍길동',
    score: 80,
    birth: '2001-05-01',
    phone: '+82-10-111-1111',
    gender : '파친놈'
}, {
    studentName: '김민수',
    score: 90,
    birth: '1999-11-03',
    phone: '+67-43-33-3333',
    gender : '돌아이'
}, {
    studentName: '박이현',
    score: 85,
    birth: '1995-04-23',
    phone: '+37-89-222-2222',
    gender : '괴물'
}];

function makeTable(ary) {
    var str = '';
    str += `<table border='1'>`;
    str += `<thead>
            <tr>
            <th>이름</th>
            <th>점수</th>
            <th>생년월일</th>
            <th>연락처</th>
            <th>성별</th>
            </tr>
            <thead>`;
    str += `<tbody>`;
    for(var student of ary) {
        str += `<tr>`;
        
        // td생성.
        for(var field in student) {
            str += `<td>${student[field]}</td>`;
        }
        // str += `<td>${student.studentName}</td>`;
        // str += `<td>${student.score}</td>`;
        // str += `<td>${student.birth}</td>`;
        // str += `<td>${student.phone}</td>`;
        // -- 위처럼 각 선언해야 하는 필드값을 -> for인으로 하면 자동으로 계속 추가가됨

        str += `</tr>`;
    }

    str += `</tbody>`;
    str += `</table>`;
    return str;
}

// document.write(makeTable(students));

makeCal(2022, 5);
makeCal(2022, 6);
