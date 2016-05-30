(function(){
  'use strict';

function renderTime() {

  var currentTime = new Date();
  var diem = "AM";
  var hour = currentTime.getHours();
  var minute = currentTime.getMinutes();
  var second = currentTime.getSeconds();

  if (hour === 0) {
    hour = 12;
  }
  else if (hour > 12) {
    hour = hour - 12;
    diem = "PM";
  }

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  var myClock = document.getElementById('clock-display');
  myClock.textContent = hour + ":" + minute + ":" + second + " " + diem;
  myClock.innerText = hour + ":" + minute + ":" + second + " " + diem;
  setTimeOut('renderTime()', 1000);

}

renderTime();

}());
