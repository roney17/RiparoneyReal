
var i = 0;
var text1 = "esigner";
var text2 = "eveloper"
var speed = 50;

function Fancy(){
	if (document.getElementById("fancy").innerHTML = "Developer")
		{
		if (i < text1.length) {
			document.getElementById("fancy").innerHTML += text1.charAt(i);
			i++;
			setTimeout(Fancy, speed);
		}
	}else{
		if (i < text2.length) {
			document.getElementById("fancy").innerHTML += text2.charAt(i);
			i++;
			setTimeout(Fancy, speed);
	}
}

}	