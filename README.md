# Developed a web-based calculator for The Odin Project.

## Logic Outline:
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
### If Logic (What happens when a button is clicked):
---
Scenario 1: character is **DEL** or **CLR**|
    If DEL => Delete the last character in the mainDisplayStr
    Else CLR => Clear both the mainDisplayStr and the altDisplayStr
---
Scenario 2: altDisplayStr already contains an operator ('+', '-', '*', '/')
    If character is a _number_ => Add to mainDisplayStr
    Else if character is an _operator_ =>
        If _last_ character in altDisplayStr is _also_ an operator,
            **replace** it with this character
        Else **perform calculation**
            a. Append the mainDisplayStr to the altDisplayStr
            b. Send the alDisplayStr to be parsed & sent to operate fn
            c. Set altDisplayStr to be equal to the calculated result of
            the last operation
            d. Append this operator character to the end of the new altDisplayStr
            e. Set the mainDisplayStr to be equal to the altDisplayStr - minus the operator
    Else if character is an _'='_ =>
        Use the same logic above (likely a regex exp) to parse the altDisplayStr sent, perform a calculation, and update the displays. Only this time, do not append the '=' operator to the mainDisplayStr

Notes:
* Output in top display must be formatted so that:
    * Instead of '56+4=', it shows '56 + 4 ='
