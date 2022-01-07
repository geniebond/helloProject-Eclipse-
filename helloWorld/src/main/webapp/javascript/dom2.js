// dom2 .js
//2022-01-07 ~


//1 클릭 이벤트 등록.
//2. 이벤트 기능 : 사용자의 입력값 -> <li>입력값</li>
//3. ul태그 찾고 ul 하위에 붙여넣기. 
let addBtn = document.getElementById('addBtn');
addBtn.onclick = function () {

    let fname = document.getElementById('fname');
    let li = document.createElement('li');
    let text = document.createTextNode(fname);
    li.appendChild(text);

    document.getElementById('nameList').appendChild(li);

    document.getElementById('fname').value = "";

    document.getElementById('fname').focus();
    

}