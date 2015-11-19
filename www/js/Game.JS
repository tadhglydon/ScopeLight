
var timerId; // current timer if started
var score = 0;

var visibleStars;
var currentStar;
var topStarOp;
var keepScore = false;

function ClickedStar(starNumber)
{
    if("Star" + starNumber == currentStar)
    {
        visibleStars[starNumber - 1] = true;
        if(AllStarsSelected())
        {
            $('#GameScore').html('Your score is ' + score);
            GetRank(score);
            
            $('#Title').hide();
            $('#Complete').show();
            $('#Game').hide();
            
            keepScore = false;
            score = 0;
        }
        else
        {
            var newStarNumber = GetRandomHiddenStar();
            var newStarName = "Star" + newStarNumber;
            currentStar = newStarName;
            $("#" + newStarName).show();

            topStarOp = topStarOp + 0.045;
            $('#TopStar').fadeTo(250,topStarOp);
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
    var newStar = Math.floor((Math.random() * 22) + 1);
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
    score = 0;
    topStarOp = 0.045;
    $('#TopStar').hide();

	$('#Title').hide();
	$('#Complete').hide();
	$('#Game').show();

    $('#Star2').hide();
    $('#Star3').hide();
    $('#Star4').hide();
    $('#Star5').hide();
    $('#Star6').hide();
    $('#Star7').hide();
    $('#Star8').hide();
    $('#Star9').hide();
    $('#Star10').hide();
    $('#Star11').hide();
    $('#Star12').hide();
    $('#Star13').hide();
    $('#Star14').hide();
    $('#Star15').hide();
    $('#Star16').hide();
    $('#Star17').hide();
    $('#Star18').hide();
    $('#Star19').hide();
    $('#Star20').hide();
    $('#Star21').hide();
    $('#Star22').hide();

    currentStar = "Star1";
    visibleStars = [true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
    keepScore = true;
}

function GoToDonatePage () {
	window.location.href = 'https://www.scope.org.uk/donate';
}

function StartGame()
{
    timerId = setInterval(Update,1000);
	ResetValues();
}

function Update()
{
    if (keepScore)
    {
    	score = score + 1;
    }
	$('#Score').html('Score: ' + score);
}

function GetRank(score)
{
	var rank;
	switch(score) {
    case 1:
    case 2:
    case 3:
        rank = "a gingerbread house";
        break;
    case 4:
    case 5:
    case 6:
        rank = "a shiny babble";
        break;
    case 7:
    case 8:
    case 9:
        rank = "a candy cane";
        break;
    case 10:
    case 11:
    case 12:
        rank = "a warm cupcake";
        break;
    case 13:
    case 14:
    case 15:
        rank = "some sparkly tinsel";
        break;
    case 16:
    case 17:
    case 18:
        rank = "a Christmas stocking";
        break;
    case 19:
    case 20:
    case 21:
        rank = "some holly";
        break;
    case 22:
    case 23:
    case 24:
        rank = "ringing bells";
        break;
    case 25:
    case 26:
    case 27:
        rank = "a Santa hat";
        break;
    case 28:
    case 29:
    case 30:
        rank = "a Christmas cracker";
        break;
    case 31:
    case 32:
    case 33:
        rank = "a snowman";
        break;
    case 34:
    case 35:
    case 36:
        rank = "reindeer";
        break;
    case 37:
    case 38:
    case 39:
        rank = "a unique snowflake";
        break;
    case 40:
    case 41:
    case 42:
        rank = "a sled";
        break;
    case 43:
    case 44:
    case 45:
        rank = "warm mittens";
        break;
    case 46:
    case 47:
    case 48:
        rank = "Chirstmas pudding";
        break;
    case 49:
    case 50:
    case 51:
        rank = "chocolate";
        break;
    case 52:
    case 53:
    case 54:
        rank = "a candle";
        break;
    case 55:
    case 56:
    case 57:
        rank = "wrapping paper";
        break;
    case 58:
    case 59:
    case 60:
        rank = "a bow";
        break;
    case 61:
    case 62:
    case 63:
        rank = "a star";
        break;
    default:
        rank="Santa";
	}
	$('#Rank').html('You achieved the rank of ' + rank + '!');
}

