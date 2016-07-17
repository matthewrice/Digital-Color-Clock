(function(){
  'use strict';


  function colorClock(){
    /*
     * Date is a built in JavaScript object.  Because it is a constructor, to use
     * it, create a new instance.
     */
    var time = new Date();
    console.log(time);
    var clock = document.getElementById('clock');


    /*
     * getHours, getMinutes, & getSeconds are built in methods of the Date object
     * that performs specific functions.
     */
    var currentHours = time.getHours();
    var currentMinutes = time.getMinutes();
    var currentSeconds = time.getSeconds();

    /*
     * Instead of "if statements", use the ternary operator to add 0 to number if
     * less than 10
     */
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // state am or pm as appropriate.
    var timeOfDay = (currentHours < 12) ? "am" : "pm";
    // change the time format from 24 hr to 12 hr format.
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    // make the hrs component to show 12 rather than 0. This would occur at 12am & 12pm.
    currentHours = (currentHours === 0) ? 12 : currentHours;

    /*
     * to display currentHours, currentMinutes, currentSeconds, and timeOfDay as
     * clock, create a string by concatenating them together.
     */
    var currentTime = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    console.log(currentTime);

    /*
     * populate the html span in the DOM by retrieving the child text node by setting
     * it's nodeValue property. if you prefer, you can accomplish a similar result
     * by using innerHTML, textContent, or innerText.
     */
    document.getElementById("clock").firstChild.nodeValue = currentTime;

    // convert the time to a hex number.
    var h = currentHours.toString(16);
    var m = currentMinutes.toString(16);
    var s = currentSeconds.toString(16);

    /*
     * update the background color of the page using a hexideciaml color.
     */
    document.body.style.backgroundColor = '#0' + s;
    console.log(document.body.style.backgroundColor);

    // display the generated color's hex value on hover
    if (clock.parentElement.querySelector(':hover') === clock) {
      var x = s[0];
      var y = s[1];

      clock.textContent = '#00:' + x + x + ':' + y + y;
    } 
  }

  // update a percentage of the progress bar as seconds go from 0 to 60.
  function progressBar(){
    var progressBarWidth = document.querySelector("#my-progress");
    var trackTime = new Date();
    var seconds = trackTime.getSeconds();
    var counter = 0;

    if (counter === 100){
      progressBarWidth.style.width;
    } else {
      counter = (seconds/60) * 100;
      console.log(counter);
      progressBarWidth.style.width = counter + "%";
    }
    console.log(progressBarWidth);
  }

  // update the clock every second.
  setInterval(colorClock, 1000);
  // update the progress bar every second.
  setInterval(progressBar, 1000);


}());
