/*To work this script:
 *If "manual" on line 5 is "true", you can set "manualDate" on line 7 to any date you wish (US Format), and the clock will begin counting from then.
 *If "manual" on line 5 is "false", the web page will restart from 00:00:00 every time the page is refreshed.
*/
var manual = true;
//Only edit the X's below|"XX/XX/XXXX"| American format, MM/DD/YYYY.
var manualDate = new Date("05/24/2017").getTime();
var autoDate;
var prevP1Date;
var x = setInterval(function(){timer()}, 1000);

	function timer(){
		if(manual){
			var prevP1Date = manualDate;
		} else {
			var prevP1Date = autoDate;
		}

	    var now = new Date().getTime();
	    var distance = now - prevP1Date;
	    //Date Calculations
	    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	    if(days < 10){days = "0"+days}
	    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		if(hours < 10){hours = "0"+hours}
	    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		if(minutes < 10){minutes = "0"+minutes}
	    //var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	    //Display the timer.
	    document.getElementById("P1Counter").innerHTML ="| " + days + " days | "  + hours + " hrs |" + '<br>' + "| " + minutes + " mins |";

		//Display the last P1 date in a readable format.
		var lastDate = new Date(prevP1Date).toLocaleDateString("en-GB");
		document.getElementById("lastP1Date").innerHTML = "["+lastDate+"]";
	}

	function resetClock(){
		alert("Remember to set the clock again in 'scripts.js' in the root of this page.");
		manual = false;
		autoDate = new Date().getTime();
	}

	function setClock(){
		manual = true;
		var setDate = prompt("Enter the date of the last P1 incident:" + "\n" + "American format - MM/DD/YYYY");
		manualDate = new Date(setDate).getTime();
		console.log(manualDate);
	}