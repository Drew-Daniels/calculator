Developed a web-based calculator for The Odin Project.

Logic Outline:
* There will be one variable 'displayStr' that will keep track of string values returned by button callback functions
* The previous number entered and its operator will be displayed in the _top_ of the display area
* The current number being entered will be displayed in the _main_ part of the display area
---
Example:
---
    |Entry      |Variable|      |Main Display|      |Top Display|
    * Type '5' => '5'           '5'
    * Type '6' => '56'          '56'
    * Type '+' => '56+'         '56'                '56+'
    * Type '4' => '56+4'        '4'                 '56+'
    * Type '=' => '60'          '60'                '56+4='
---
Notes:
* Output in top display must be formatted so that:
    * Instead of '56+4=', it shows '56 + 4 ='
