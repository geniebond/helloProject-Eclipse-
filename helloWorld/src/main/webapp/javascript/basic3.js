// basic3.js

var member1 = {
    memberId : 1001,
    memberName : '홍길동',
    memberPhone : '010-111-1111',
    memberAddr : 'Daegu 100',
}

var member2 = {
    memberId : 1002,
    memberName : '김도연',
    memberPhone : '010-222-2222',
    memberAddr : 'Daegu 200',
}

var member3 = {
    memberId : 1003,
    memberName : '차주연',
    memberPhone : '010-333-3333',
    memberAddr : 'Daegu 300',
}

var member4 = {
    memberId : 1004,
    memberName : '전호민',
    memberPhone : '010-444-4444',
    memberAddr : 'Daegu 400',
}
//
var members = [member1, member2, member3, member4];
//
var str = '';
str += '<table border = "10">';
str += '<thead><tr>';

for(var field in member1) {
    str += `<th>${field}</th>`;
}

str += '</tr></thead>';
str += '<tbody>';

// for(String str : strings) {} 자바스크립트에서도 향상된 for문이 사용 가능합니다. 






// for(var i = 0; i<members.length; i++){
//     //var field = 'memberAddr';

//     console.log(`${i+1}번의 Id=>${members[i].memberId}`);
//     console.log(`${i+1}번의 Name=>${members[i].memberName}`);
//     console.log(`${i+1}번의 Phone=>${members[i].memberPhone}`);
//     console.log(`${i+1}번의 Addr=>${members[i].memberAddr}`);
    
    for(var member of members){
    str += '<tr>';
    for(var field in member){
        str += `<td>${member[field]}</td>`;
        //또는 주석처리한 for문 사용시에는 str += `<td>${members[i][field]}</td>`;
    }
    str += '</tr>';
}


str += '</tbody></table>';
document.write(str);

// string, number, boolean, array, object
// null, undefined