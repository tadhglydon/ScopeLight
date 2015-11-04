/*
 * Very rough at the moment. Lots of copy+paste code which is bad.
 */
var candleClicked1 = false;
var candleClicked2 = false;
var candleClicked3 = false;
var candleClicked4 = false;

var timerId; // current timer if started
var score;

function ResetValues()
{
	candleClicked1 = false;
	candleClicked2 = false;
	candleClicked3 = false;
	candleClicked4 = false;
	score = 0;
	$('#litcandle1').hide();
	$('#litcandle2').hide();
	$('#litcandle3').hide();
	$('#litcandle4').hide();
}

function StartGame()
{
	ResetValues();
	alert('start score:' + score);
	timerId = setInterval(update,1000);
	update();
	$('#Title').hide();
	$('#Complete').hide();
	$('#Tree').show();
}

function update()
{
	score = score + 1;
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
	alert('start score:' + score);
	$('#litcandle3').show();
	candleClicked3 = true;
	FinishGame();
}		
function ShowImgCandle4()
{
	$('#litcandle4').show();
	candleClicked4 = true;
	FinishGame();
}
function FinishGame()
{
	//alert('candleClicked1:' + candleClicked1 + ' candleClicked2:' + candleClicked2 + ' candleClicked3: ' + candleClicked3 + ' candleClicked4:' + candleClicked4)
	if(candleClicked1 && candleClicked2 && candleClicked3 && candleClicked4)
	{
		document.getElementById('gameScore').innerHTML = 'Score: ' + score;
		$('#Title').hide();
		$('#Complete').show();
		$('#Tree').hide();
	}
}