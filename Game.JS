

/*
 * Very rough at the moment. Lots of copy+paste code which is bad.
 */
var candleClicked1 = false;
var candleClicked2 = false;
var candleClicked3 = false;
var candleClicked4 = false;

		var timerId; // current timer if started
		var score;

		window.onload = StartCounter;

		function StartCounter()
		{
			candleClicked1 = false;
			candleClicked2 = false;
			candleClicked3 = false;
			candleClicked4 = false;
			score = 0;
			alert('start');
			timerId = setInterval(update,1000);
			update();
		}

		function update()
		{
			score = score + 1;
		}
		function ShowImgCandle1()
		{
			var obj=document.getElementById('litcandle1');
			obj.className = 'show';
			candleClicked1 = true;
			FinishGame();
		}
		function ShowImgCandle2()
		{
			var obj=document.getElementById('litcandle2');
			obj.className = 'show';
			candleClicked2 = true;
			FinishGame();
		}
		function ShowImgCandle3()
		{
			var obj=document.getElementById('litcandle3');
			obj.className = 'show';
			candleClicked3 = true;
			FinishGame();
		}		
		function ShowImgCandle4()
		{
			var obj=document.getElementById('litcandle4');
			obj.className = 'show';
			candleClicked4 = true;
			FinishGame();
		}
		function FinishGame()
		{
			//alert('candleClicked1:' + candleClicked1 + ' candleClicked2:' + candleClicked2 + ' candleClicked3: ' + candleClicked3 + ' candleClicked4:' + candleClicked4)
			if(candleClicked1 && candleClicked2 && candleClicked3 && candleClicked4)
			{
				alert('Score: ' + score);
				candleClicked1 = false;
				candleClicked2 = false;
				candleClicked3 = false;
				candleClicked4 = false;
				var obj=document.getElementById('litcandle1');
				obj.className = 'hide';
				obj=document.getElementById('litcandle2');
				obj.className = 'hide';
				obj=document.getElementById('litcandle3');
				obj.className = 'hide';
				obj=document.getElementById('litcandle4');
				obj.className = 'hide';

				score = 0;
			}
		}