var SevenSegment = require('../index');

var display = new SevenSegment(0x70, 1);

var colon = true;

var interval = setInterval( function() {
  var date = new Date(),
      hour = date.getHours(),
      minute = date.getMinutes();

  //Hours
  display.writeDigit(0, Math.round(hour / 10));
    display.writeDigit(1, hour % 10);

    //Minutes
    display.writeDigit(3, Math.round(minute / 10));
    display.writeDigit(4, minute % 10);

    //Colon
    display.setColon(colon);
    colon = !colon;

}, 1000);
