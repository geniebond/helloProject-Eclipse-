// event1.js
// 2022-01-06 ~ 

let str = `<table border="1">
<thead>
    <tr>
    <th>이름</th>
    <th>전화번호</th>
    <th>주소</th>
    <th>삭제</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>홍길동</td>
        <td>053-1234-5678</td>
        <td>대구 중구 100번지</td>
        <td><button>삭제</button></td>
    </tr>
    <tr>
        <td>변사또</td>
        <td>053-328-7645</td>
        <td>대구 서구 200번지</td>
        <td><button>삭제</button></td>
    </tr>
    <tr>
        <td>춘향이</td>
        <td>053-456-6425</td>
        <td>대구 남구 300번지</td>
        <td><button>삭제</button></td>
    </tr>
</tbody>
</table>`;
document.write(str); //

let names = document.querySelectorAll('table>tbody>tr>td:nth-child(1)');
console.log(names);

for (let i = 0; i < names.length; i++) {
    names[i].onclick = function (e) { //td
        console.log(e.target.innerText);
        let text = e.target.innerText;
        alert(text + ' 입니다!'); // 페이지 창에서 클릭시  ~~입니다(이벤트 생성됨)
    }
}

//
let rows = document.querySelectorAll('tbody>tr');
for (let i = 0; i < rows.length; i++) {
    rows[i].onmouseover = function (e) {
        console.log(e.target.parentNode); //parentNode = 부모 요소를 가져옴
        e.target.parentNode.style.backgroundColor = 'pink';
        // e.target.parentNode.style.display = 'none';
    }

    rows[i].onmouserout = function (e) {
        // console.log(e.target.parentNode);
        e.target.parentNode.style.backgroundColor = null;
    }
}

let btns = '';
for (let i = 0; i < btns.length; i++) {
    // btns[i].onclick = deleteFnc;//remove 지우는 메소드
    btns[i].addEventListener('click', deleteFnc); // 이벤트를 등록해주는 메소드
    }

function deleteFnc(e) {
    e.target.parentNode.parentNode.remove();
}