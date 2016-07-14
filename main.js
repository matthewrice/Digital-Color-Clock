(function(){
  function colorClock(){
    var clock = new Date(),
    h = clock.getHours(),
    m = clock.getMinutes(),
    s = clock.getSeconds();

    if(h.toString().length < 2){
      h = '0' + h;
    }
    if(m.toString().length < 2){
      m = '0' + m;
    }
    if(s.toString().length < 2){
      s = '0' + s;
    }

    var time = h + ':' + m + ':' + s;

    document.getElementById()
  }
}());


// (function(){
//   'use strict';
//
// function renderTime() {
//
//   var currentTime = new Date();
//   var diem = "AM";
//   var hour = currentTime.getHours();
//   var minute = currentTime.getMinutes();
//   var second = currentTime.getSeconds();
//
//   if (hour === 0) {
//     hour = 12;
//   }
//   else if (hour > 12) {
//     hour = hour - 12;
//     diem = "PM";
//   }
//
//   if (hour < 10) {
//     hour = "0" + hour;
//   }
//   if (minute < 10) {
//     minute = "0" + minute;
//   }
//   if (second < 10) {
//     second = "0" + second;
//   }
//
//   var myClock = document.getElementById('clock-display');
//   myClock.textContent = hour + ":" + minute + ":" + second + " " + diem;
//   myClock.innerText = hour + ":" + minute + ":" + second + " " + diem;
//   setTimeOut('renderTime()', 1000);
//
// }
//
// renderTime();
//
// }());
