// calender.js

// 2022-01-05 날짜 써보기

var today = new Date(2022, 1);
var lastDay = new Date(2022, 2, 0);
document.write(`<h3>${today.getFullYear()} 년 ${today.getMonth()+1} 월</h3>`);

// document.write(lastDay.getDate());

// for(var c=0; c<7; c++){
//     document.write('<span></span>');
// }


// 2월
document.write('<span>일</span>');
document.write('<span>월</span>');
document.write('<span>화</span>');
document.write('<span>수</span>');
document.write('<span>목</span>');
document.write('<span>금</span>');
document.write('<span>토</span>');
document.write('<br>');


for (var n = 0; n < today.getDay(); n++) {
    document.write('<span> </span>')
}

for (var i = 1; i <= lastDay.getDate(); i++) {
    document.write('<span>' + i + '일' + '</span>')
    if ((i + 2) % 7 == 0) {
        document.write('<br>');
        //일주일을 7일로 나누고 7일이 되면 줄바꿈을 실행 그것을 -> 'br'이 담당
    }

}
document.write('<br>')

// 3월

var year = 2022;
var month = 5;

function makeCal(year, month) {


    //

    var today = new Date(year, month - 1, 1);
    var lastDay = new Date(year, month, 0);

    var firstDayOfMonth = today.getDay();
    var lastDateOfMonth = lastDay.getDate();
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

    document.write(`<h3>${today.getFullYear()} 년 ${today.getMonth()+1} 월</h3>`);
    // getmonth +1을 기본이 0부터 시작하니 +1로 해서 1월을 설정시킴

    //배열을 활용 요일 출력
    for (var day of days) {
        document.write('<span>' + day + '</span>');
    }

    // document.write('<span>일</span>');
    // document.write('<span>월</span>');
    // document.write('<span>화</span>');
    // document.write('<span>수</span>');
    // document.write('<span>목</span>');
    // document.write('<span>금</span>');
    // document.write('<span>토</span>');
    document.write('<br>');


    //빈 공란 출력
    for (var n = 0; n < firstDayOfMonth; n++) {
        document.write('<span></span>')

    }
    //날짜 출력
    // for (var i = 1; i <= lastDateOfMonth; i++) {
    //     document.write('<span>' + i + '일' + '</span>');
    //     if ((i + firstDayOfMonth) % 7 == 0) {
    //         document.write('<br>');
    //     }
    // }

    for (var i = 1; i <= lastDateOfMonth; i++) {
        if ((i + firstDayOfMonth) % 7 == 1) {
            document.write('<span class="sunday">' + i + '일' + '</span>');
        } else if ((i + firstDayOfMonth) % 7 == 0) {
            document.write('<span class="saturday>>' + i + '일' + '</span>');
        } else {
            document.write('<span>' + i + '일' + '</span>');
        }
        if ((i + firstDayOfMonth) % 7 == 0) {
            document.write('<br>');
        }
    }




} //function cal 대관로 끝부분


// var today = new Date();
// console.log(today);
// console.log(today.getFullYear());
// console.log(today.getMonth());
// console.log(today.getDate());
// console.log(today.getDay());

// //

// var otherday = new Date(2021, 5, 0);
// console.log(otherday);
// console.log(otherday.getFullYear());
// console.log(otherday.getMonth());
// console.log(otherday.getDate());
// console.log(otherday.getDay());