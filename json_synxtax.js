//JSON syntax

JSON = 
	null
	OR true OR false
	OR JSONNumber
	OR JSONString
	OR JSONObject
	OR JSONArray

JSONNumber = 
	- PositiveNumber
	OR PositiveNumber
PositiveNumber =
	DecimalNumber
	OR DecimalNumber . Digits
	OR DecimalNumber . Digits ExponentPart
	OR DecimalNumber ExponentPart
DecimalNumber =
	0
	OR [1-9] Digits
ExponentPart =
	e Exponent
	OR E Exponent
Exponent =
	Digits
	OR + Digits
	OR - Digits
Digits =
	Digit
	OR Digits Digit
Digit = [0-9]
OneToNine = [1-9]

JSONString =
	""
	OR " StringCharacters "
StringCharacters =
	StringCharacter
	OR StringCharacters StringCharacter
StringCharacter =
	any character
		except "
		OR \
		OR [U+0000-U+001F]
	OR EscapeSequence
EscapeSequence =
	\"
	OR \/
	OR \\
	OR \b
	OR \f
	OR \n
	OR \r
	OR \t
	OR \u HexDigit HexDigit HexDigit HexDigit
HexDigit =
	[0-9]
	OR [A-F]
	OR [a-f]

JSONObject =
	{ }
	OR { Members }
Members =
	JSONString : JSON
	OR Members , JSONString : JSON

JSONArray =
	[ ]
	OR [ ArrayElements ]
ArrayElements =
	JSON
	OR ArrayElements , JSON