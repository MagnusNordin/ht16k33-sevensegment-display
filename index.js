var LEDBackpack = require('./led_backpack');


function SevenSegment(address, bus){
  address = address || 0x70
  bus = bus || 1

  //Hexadecimal character lookup table (0..9, A..F)
  this.digits = [ 0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F, 0x77, 0x7C, 0x39, 0x5E, 0x79, 0x71 ];

  this.display = new LEDBackpack(address, bus);
}

SevenSegment.prototype.writeDigit = function(charNumber, value, dot) {
  //Sets a single decimal or hexademical value (0..9 and A..F)
  if (charNumber > 7)
    return;
  if (value > 0xF)
    return;

  //Set the appropriate digit
  this.display.setBufferRow(charNumber, this.digits[value] | (dot << 7));
}

SevenSegment.prototype.writeDigitRaw = function(charNumber, value){
  //Sets a digit using the raw 16-bit value"
  if (charNumber > 7)
    return;

  //Set the appropriate digit
  this.display.setBufferRow(charNumber, value);
}

SevenSegment.prototype.setColon = function(state){
  
  //Warning: This function assumes that the colon is character '2',
  //which is the case on 4 char displays, but may need to be modified
  //if another display type is used

  if (state)
    this.display.setBufferRow(2, 0xFFFF);
  else
    this.display.setBufferRow(2, 0);
}

SevenSegment.prototype.clear = function() {
  this.display.clear();
}

module.exports = SevenSegment
