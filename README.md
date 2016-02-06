#Seven segment display with HT16K33 backpack
Driver for the HT16K33 backpack and 7-segement display from [Adafruit](https://learn.adafruit.com/adafruit-led-backpack/0-dot-56-seven-segment-backpack).

###Installation
```sh
npm install ht16k33-sevensegment-display
```

###Example
```js
var SevenSegment = require('ht16k33-sevensegment-display');

var display = new SevenSegment(0x70, 1);
display.writeDigit(0, 8);

```

###Licensing
MIT

###Copyright
Magnus Nordin 2016
