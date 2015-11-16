/*
 * Very rough at the moment. Lots of copy+paste code which is bad.
 */
var candleClicked1 = false;
var candleClicked2 = false;
var candleClicked3 = false;
var candleClicked4 = false;
var candleClicked5 = false;
var candleClicked6 = false;
var candleClicked7 = false;

var timerId; // current timer if started
var score;

function ResetValues()
{
	candleClicked1 = false;
	candleClicked2 = false;
	candleClicked3 = false;
	candleClicked4 = false;
	candleClicked5 = false;
	candleClicked6 = false;
	candleClicked7 = false;
	score = 0;
	$('#litcandle1').hide();
	$('#litcandle2').hide();
	$('#litcandle3').hide();
	$('#litcandle4').hide();
	$('#litcandle5').hide();
	$('#litcandle6').hide();
	$('#litcandle7').hide();
	$('#Title').hide();
	$('#Complete').hide();
	$('#Tree').show();
}

function GoToDonatePage () {
	window.location.href = 'https://www.scope.org.uk/donate';
}

function StartGame()
{
	score = 0;
	update();
	timerId = setInterval(update,1000);
	ResetValues();
}

function update()
{
	score = score + 1;
	document.getElementById('testScore').innerHTML = 'Score: ' + score;
}

function ShowImgCandle1()
{
	$('#litcandle1').show();
	candleClicked1 = true;
	FinishGame();
}

function ShowImgCandle2()
{
	$('#litcandle2').show();
	candleClicked2 = true;
	FinishGame();
}

function ShowImgCandle3()
{
	$('#litcandle3').show();
	candleClicked3 = true;
	FinishGame();
}		

function ShowImgCandle4()
{
	$('#litcandle4').show();
	candleClicked4 = true;

	$('#litcandle2').hide();
	candleClicked2 = false;
	FinishGame();
}

function ShowImgCandle5()
{
	$('#litcandle5').show();
	candleClicked5 = true;
	FinishGame();
}

function ShowImgCandle6()
{
	$('#litcandle6').show();
	candleClicked6 = true;

	$('#litcandle3').hide();
	candleClicked3 = false;
	FinishGame();
}

function ShowImgCandle7()
{
	$('#litcandle7').show();
	candleClicked7 = true;
	FinishGame();
}

function FinishGame()
{
	//alert('candleClicked1:' + candleClicked1 + ' candleClicked2:' + candleClicked2 + ' candleClicked3: ' + candleClicked3 + ' candleClicked4:' + candleClicked4)
	if(candleClicked1 && candleClicked2 && candleClicked3 && candleClicked4 && candleClicked5 && candleClicked6 && candleClicked7)
	{
		document.getElementById('gameScore').innerHTML = 'Your score is ' + score;
		GetRank(score);
		$('#Title').hide();
		$('#Complete').show();
		$('#Tree').hide();
		score = 0;
	}
}

function GetRank(score)
{
	var rank;
	switch(score) {
    case 1:
        rank = "a gingerbread house";
        break;
    case 2:
        rank = "a shiny babble";
        break;
    case 3:
        rank = "a candy cane";
        break;
    case 4:
        rank = "a warm cupcake";
        break;
    case 5:
        rank = "some sparkly tinsel";
        break;
    case 6:
        rank = "a Christmas stocking";
        break;
    case 7:
        rank = "some holly";
        break;
    case 8:
        rank = "ringing bells";
        break;
    case 9:
        rank = "a Santa hat";
        break;
    case 10:
        rank = "a Christmas cracker";
        break;
    case 11:
        rank = "a snowman";
        break;
    case 12:
        rank = "reindeer";
        break;
    case 13:
        rank = "a unique snowflake";
        break;
    case 14:
        rank = "a sled";
        break;
    case 15:
        rank = "warm mittens";
        break;
    case 16:
        rank = "Chirstmas pudding";
        break;
    case 17:
        rank = "chocolate";
        break;
    case 18:
        rank = "a candle";
        break;
    case 19:
        rank = "wrapping paper";
        break;
    case 20:
        rank = "a bow";
        break;
    case 21:
        rank = "a star";
        break;
    default:
        rank="Santa";
	}
	document.getElementById('rank').innerHTML = 'You achieved the rank of ' + rank + '!';
}

