//test.js


const titles = ['', '도서코드', '도서명', '저자', '출판사', '가격'];

const data = [{
    empty : '',
    bcode: 'P12301285',
    bname: '이것이 자바다',
    bauthor: '홍성문',
    bcompany: '신흥출판사',
    bprice: '25,000원'
}, {
    empty : '',
    bcode: 'P12301285',
    bname: '이것이 자바다',
    bauthor: '홍성문',
    bcompany: '신흥출판사',
    bprice: '25,000원'
}, {
    empty : '',
    bcode: 'P12301285',
    bname: '이것이 자바다',
    bauthor: '홍성문',
    bcompany: '신흥출판사',
    bprice: '25,000원'
}, {
    empty : '',
    bcode: 'P12301285',
    bname: '이것이 자바다',
    bauthor: '홍성문',
    bcompany: '신흥출판사',
    bprice: '25,000원'
}, {
    empty : '',
    bcode: 'P12301285',
    bname: '이것이 자바다',
    bauthor: '홍성문',
    bcompany: '신흥출판사',
    bprice: '25,000원'
}];

let parent = document.getElementById('more');

// 1) 테이블
let tbl = document.createElement('table');
tbl.setAttribute('border', '1');
parent.appendChild(tbl);


// 2) 헤드
let thd = document.createElement('thead');



// 3) tr
let tr = document.createElement('tr');
tbl.appendChild(tr);

titles.forEach(function (title) {
    let th = document.createElement('th');
    let text = document.createTextNode(title);
    th.appendChild(text);
    tr.appendChild(th);
});
tbl.appendChild(thd);


// --- button

let td = document.createElement('th');

let text = document.createTextNode("삭제");
td.appendChild(text);
tr.appendChild(td);

//

let tbd = document.createElement('tbody'); 
data.forEach(function (obj) {
    let tr = document.createElement('tr');


    for(let field in obj) {
    let td = document.createElement('td');
    let text = document.createTextNode(obj[field]); 
    td.appendChild(text); 
    tr.appendChild(td);
    }

    //-------------------------------------------------

    // ------------삭제버튼 
    let td = document.createElement('td');
    let btn = document.createElement('button'); 
    btn.onclick = function(e) { 
        console.log(e.target);
        e.target.parentNode.parentNode.remove(); 
    }
    let text = document.createTextNode('삭제'); 
    btn.appendChild(text); 
    td.appendChild(btn);
    tr.appendChild(td);
   

    tbd.appendChild(tr); 

    //------ 전체 체크 
    function makeHead() {

        let thd = document.createElement('thead');
        let tr = document.createElement('tr');
    

        //삭제 버튼
        let th = document.createElement('th');
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.addEventListener('change', allCheckFnc); // 전체선택
        th.appendChild(checkbox);
        tr.appendChild(th);
    
    
        //필드
        titles.forEach(function(data) {
            let th = document.createElement('th');
            let text = document.createTextNode(data);
            th.appendChild(text);
            tr.appendChild(th);
        });
        thd.appendChild(tr);
        return thd;
    }

    
});

tbl.appendChild(tbd);