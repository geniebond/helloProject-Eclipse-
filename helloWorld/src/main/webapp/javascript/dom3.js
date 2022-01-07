//dom3.js 
// 2022-01-07 ~ 

// <!-- <div id="show"></div>
// <input type="text" value="text">
// <button>조회삭제</button>
// <button>추가</button>
// <p>helo</p>
// <ul id="nameList">
//     <li>강백호</li>
//     <li>서태웅</li>
//     <li>채치수</li>
//     <li>정대만</li>
//     <li>송태섭</li>
// </ul>

//위 해당 내용이 출력이 되도록 여기서 만들어 봅니다. 

//dom생성


let div = document.createElement("div");

div.setAttribute("id", "show");
console.log(div);

let bdy = document.getElementById('bdy');

bdy.appendChild(div);

let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("value", "text");
bdy.appendChild(input);

//

let btn = document.createElement("button");
let btnCancle = document.createElement("button");
btn.innerText = '추가';
btn.innerText = "조회삭제";

bdy.appendChild(btn);

bdy.appendChild(btnCancle);

//






