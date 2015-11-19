
var timerId; // current timer if started
var score;

var visibleStars = [true,false,false];
var currentStar = "Star1";

function ClickedStar(starNumber)
{
    alert(starNumber);
    if("Star" + starNumber == currentStar)
    {
        visibleStars[starNumber - 1] = true;
        if(AllStarsSelected())
        {
            alert("All stars selected");
            $('#TopStar').show();
            $('#GameScore').html('Your score is ' + score);
            GetRank(score);
            $('#Title').hide();
            $('#Complete').show();
            $('#Tree').hide();
            score = 0;
        }
        else
        {
            var newStarNumber = GetRandomHiddenStar();
            var newStarName = "Star" + newStarNumber;
            alert(newStarName);
            $("#" + newStarName).show();
            currentStar = newStarName;
            alert(visibleStars[0] + ' ' + visibleStars[1]+ ' ' + visibleStars[2]);
        }
    }
}

function AllStarsSelected()
{
    for (i = 0; i < visibleStars.length; i++) { 
        if(visibleStars[i] == false)
        {
            return false;
        }
    }
    return true;
}

function GetRandomHiddenStar()
{
    var newStar = Math.floor((Math.random() * 3) + 1);
    if(visibleStars[newStar - 1] == false)
    {
        return newStar;
    }    
    else
    {
        return GetRandomHiddenStar();
    }

}

function ResetValues()
{
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
	$('#Score').html('Score: ' + score);
}

function FinishGame()
{
	//alert('candleClicked1:' + candleClicked1 + ' candleClicked2:' + candleClicked2 + ' candleClicked3: ' + candleClicked3 + ' candleClicked4:' + candleClicked4)
	if(candleClicked1 && candleClicked2 && candleClicked3 && candleClicked4 && candleClicked5 && candleClicked6 && candleClicked7)
	{
		$('#GameScore').html('Your score is ' + score);
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
	$('#Rank').html('You achieved the rank of ' + rank + '!');
}

