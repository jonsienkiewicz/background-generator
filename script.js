var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256); 
	var rgb1 = 'rgb(' + r + ',' + g + ',' + b + ')';
	var r2 = Math.floor(Math.random()*256);
	var g2 = Math.floor(Math.random()*256);
	var b2 = Math.floor(Math.random()*256); 
	var rgb2 = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')'; 

	body.style.background = "linear-gradient(to right, " + rgb1 +", "+ rgb2 +")";
	css.textContent = body.style.background + ";";
})


function changeBgColor (){
	body.style.background = "linear-gradient(to right, " + color1.value +", "+ color2.value +")";
	css.textContent = body.style.background + ";";	
}

color1.addEventListener("input", changeBgColor);

color2.addEventListener("input", changeBgColor);