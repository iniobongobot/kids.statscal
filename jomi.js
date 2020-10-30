let name = false, category = false, level = false, level1 = false;
function collect(){
	if (document.getElementById('name').value == ""){
		document.getElementById('error').innerHTML='Please insert your name to continue.';
	}else{
	name = document.getElementById('name').value;
	category = document.getElementById('category').value;
	level = parseFloat(document.getElementById('level').value);
	document.getElementById('sec1').style.display = 'none';
	document.getElementById('sec2').style.display = 'block';
	document.getElementById('header').style.display = 'block';
	if (level == 25){
		level1 ="Level 1"
	}
	else if(level == 50){
		level1 ="Level 2"
	}
	else if(level == 75){
		level1 ="Level 3"
	}
	else if(level == 100){
		level1 ="Level 4"
	}
	else if(level == 150){
		level1 ="Level 5"
	}
	document.getElementById('namereplace').innerHTML=name.toUpperCase() + "'s " +category.toUpperCase()+' '+level1;
	if (category == 'addition'){
		zero()
	}
	else if (category== 'substraction'){
		hero()
	}
	else if (category== 'multiplication'){
		mero()
	}
	else if (category== 'division'){
		dero()
	}
	
}
}
function dollect(){
	category = document.getElementById('categor').value;
	document.getElementById('sec1').style.display = 'none';
	document.getElementById('sec2').style.display = 'block';
	document.getElementById('namereplace').innerHTML=name.toUpperCase() + "'s " +category.toUpperCase()+' '+level1;
	if (category == 'addition'){
		zero()
	}
	else if (category== 'substraction'){
		hero()
	}
	else if (category== 'multiplication'){
		mero()
	}
	else if (category== 'division'){
		dero()
	}
	
}
function eollect(){
	level = parseFloat(document.getElementById('leve').value);
	document.getElementById('sec1').style.display = 'none';
	document.getElementById('sec2').style.display = 'block';
	if (level == 25){
		level1 ="Level 1"
	}
	else if(level == 50){
		level1 ="Level 2"
	}
	else if(level == 75){
		level1 ="Level 3"
	}
	else if(level == 100){
		level1 ="Level 4"
	}
	else if(level == 150){
		level1 ="Level 5"
	}
	document.getElementById('namereplace').innerHTML=name.toUpperCase() + "'s " +category.toUpperCase()+' '+level1;
}

function recollect(){
	document.getElementById('sec2').style.display = 'none';
	document.getElementById('sec1').style.display = 'block';
	document.getElementById('header').style.display = 'none';
}
function zero(){
	var output = "<h1 id='jomi'></h1><input type='number' id='jomi1' name='jomi1'><button class='check' onclick='two(); openPopUp()'>Check Answer</button>";
	document.getElementById('zehe').innerHTML = output;
	one();
};
function hero(){
	var output = "<h1 id='jomi'></h1><input type='number' id='jomi1' name='jomi1'><button class='check' onclick='four(); openPopUp()'>Check Answer</button>";
	document.getElementById('zehe').innerHTML = output;
	tree();
};
function mero(){
	var output = "<h1 id='jomi'></h1><input type='number' id='jomi1' name='jomi1'><button class='check' onclick='m2(); openPopUp()'>Check Answer</button>";
	document.getElementById('zehe').innerHTML = output;
	m1();
};
function dero(){
	var output = "<h1 id='jomi'></h1><h3>Round Answer to 1 decimal Place</h3><input type='number' id='jomi1' name='jomi1'><button class='check' onclick='d2(); openPopUp()'>Check Answer</button>";
	document.getElementById('zehe').innerHTML = output;
	d1();
};
let first, second;
let pass = 0, fail = 0;
function one(){
	first = Math.floor(Math.random()*(level-2))+2;
	second = Math.floor(Math.random()*((level-10)-2))+2;
	if (first<2){
		document.getElementById('uppop').style.display='block';
		document.getElementById('jomi2').innerHTML = "<b style='color:red;'>Pick a LEVEL above</b>";
		document.getElementById('jomi').innerHTML = "";
		document.getElementById('score').innerHTML ="";
		document.getElementById('uppop').style.animationName = 'popp';
	}else{
	document.getElementById('jomi').innerHTML = first + ' + '+second;
	}//document.getElementById('jomi2').innerHTML = "";
	document.getElementById('jomi1').value = "";
}

function two(){
	let three = document.getElementById('jomi1').value;
	let output = false;
	if (three.length == 0){
		output = "<b style='color:red;'>YOU NEED TO ANSWER THE QUESTION</b>";
		document.getElementById('uppop').style.animationName = 'popp';
	}else{
	if ((first+second)==three){
		output = 'Congrats '+name +' you got it right!!';
		pass+=1;
		document.getElementById('uppop').style.animationName = 'uppop';
	}
	else if ((first+second)!=three){
		output = 'You missed it '+ name+', The Right answer is '+ (first+second);
		fail+=1;
		document.getElementById('uppop').style.animationName = 'popp';
	}
	else if (three ==""){
		output = "<b style='color:red;'>YOU NEED TO ANSWER THE QUESTION</b>";
	}
	
	document.getElementById('score').innerHTML = "Correct: <b>"+pass+"</b>,  Wrong: <b>"+fail+"</b>";
	
	one();
}
	document.getElementById('jomi2').innerHTML = output;
	document.getElementById('uppop').style.display='block';
	
}

function tree(){
	first = Math.floor(Math.random()* (level - ((level/2.5)+(level/5))) ) + ((level/2.5)+(level/5));
	second = Math.floor(Math.random()*((level/2.5)+(level/5))-2)+2;
	if (first<2){
		document.getElementById('uppop').style.display='block';
		document.getElementById('jomi2').innerHTML = "<b style='color:red;'>Pick a LEVEL above</b>";
		document.getElementById('jomi').innerHTML = "";
		document.getElementById('score').innerHTML ="";
		document.getElementById('uppop').style.animationName = 'popp';
	
	}else{
	document.getElementById('jomi').innerHTML = first + ' - '+second;
	}//document.getElementById('jomi2').innerHTML = "";
	document.getElementById('jomi1').value = "";
}

function four(){
	let three = document.getElementById('jomi1').value;
	let output = false;
	if (three.length == 0){
		output = "<b style='color:red;'>YOU NEED TO ANSWER THE QUESTION</b>";
		document.getElementById('uppop').style.animationName = 'popp';
	}else{
	if ((first-second)==three){
		output = 'Congrats '+name +' you got it right!!'
		pass+=1;
		document.getElementById('uppop').style.animationName = 'uppop';
	}
	else if ((first-second)!=three){
		output = 'You missed it '+ name+', The Right answer is '+ (first-second);
		fail+=1;
		document.getElementById('uppop').style.animationName = 'popp';
	}
	else{
		output = "<b style='color:red;'>YOU NEED TO ANSWER THE QUESTION</b>";
	};
	document.getElementById('score').innerHTML = "Correct: <b>"+pass+"</b>,  Wrong: <b>"+fail+"</b>";
	var tre = tree();
	document.getElementById('jomi1').value = "";
	}
	document.getElementById('jomi2').innerHTML = output;
	
	document.getElementById('uppop').style.display='block';
}

function m1(){
	first = Math.floor(Math.random()* ((level/2.5)-2))+2;
	second = Math.floor(Math.random()*((level/5)-2))+2;
	if (first<2){
		document.getElementById('uppop').style.display='block';
		document.getElementById('jomi2').innerHTML = "<b style='color:red;'>Pick a LEVEL above</b>";
		document.getElementById('jomi').innerHTML = "";
		document.getElementById('score').innerHTML ="";
		document.getElementById('uppop').style.animationName = 'popp';
	}else{document.getElementById('jomi').innerHTML = first + ' x '+second;
	}//document.getElementById('jomi2').innerHTML = "";
	document.getElementById('jomi1').value = "";
}

function m2(){
	let three = document.getElementById('jomi1').value;
	let output = false;
	if (three.length == 0){
		output = "<b style='color:red;'>YOU NEED TO ANSWER THE QUESTION</b>";
		document.getElementById('uppop').style.animationName = 'popp';
	}else{
	if ((first*second)==three){
		output = 'Congrats '+name +' you got it right!!'
		pass+=1;
		document.getElementById('uppop').style.animationName = 'uppop';
	}
	else if ((first*second)!=three){
		output = 'You missed it '+ name+', The Right answer is '+ (first*second);
		fail+=1;
		document.getElementById('uppop').style.animationName = 'popp';
	}
	else{
		output = "<b style='color:red;'>YOU NEED TO ANSWER THE QUESTION</b>";
	};document.getElementById('score').innerHTML = "Correct: <b>"+pass+"</b>,  Wrong: <b>"+fail+"</b>";
	var tre = m1();
	document.getElementById('jomi1').value = "";};
	document.getElementById('jomi2').innerHTML = output;
	
	document.getElementById('uppop').style.display='block';
}

function d1(){
	first = Math.floor(Math.random()* ((level/2.5)-5))+5;
	second = Math.floor(Math.random()*((level/5)-2))+2;
	if (first<5){
		document.getElementById('uppop').style.display='block';
		document.getElementById('jomi2').innerHTML = "<b style='color:red;'>Pick a LEVEL above</b>";
		document.getElementById('jomi').innerHTML = "";
		document.getElementById('score').innerHTML ="";
		document.getElementById('uppop').style.animationName = 'popp';
	
	}else{
	document.getElementById('jomi').innerHTML = first + ' / '+second;}
	//document.getElementById('jomi2').innerHTML = "";
	document.getElementById('jomi1').value = "";
}

function d2(){
	console.log(first);
	let three = document.getElementById('jomi1').value;
	let output = false;
	if (three.length == 0){
		output = "<b style='color:red;'>YOU NEED TO ANSWER THE QUESTION</b>";
		document.getElementById('uppop').style.animationName = 'popp';
	}else{
	three= parseFloat(three);
	if ((first/second).toFixed(1)==three.toFixed(1)){
		output = 'Congrats '+name +' you got it right!! The answer is '+(first/second).toFixed(1);
		pass+=1;
		document.getElementById('uppop').style.animationName = 'uppop';
	}
	else if (((first/second).toFixed(1))>((three-1).toFixed(1)) && ((first/second).toFixed(1))<((three+1).toFixed(1))){
		output = 'Congrats '+name +' you were a few decimals away!! The answer is '+(first/second).toFixed(1);
		pass+=1;
	}
	else if (((first/second).toFixed(1))<=((three-1).toFixed(1)) || ((first/second).toFixed(1))>=((three+1).toFixed(1))){
		output = 'You missed it '+ name+', The Right answer is '+ (first/second).toFixed(1);
		fail+=1;
		document.getElementById('uppop').style.animationName = 'popp';
	}
	else{
		output = "<b style='color:red;'>YOU NEED TO ANSWER THE QUESTION</b>";
	};
	document.getElementById('score').innerHTML = "Correct: <b>"+pass+"</b>,  Wrong: <b>"+fail+"</b>";
	var tre = d1();
	document.getElementById('jomi1').value = "";
};
	document.getElementById('jomi2').innerHTML = output;
	
	document.getElementById('uppop').style.display='block';
};

function closePopUp(){
	document.getElementById('uppop').style.display='none';
}

function openPopUp(){
	document.getElementById('uppop').style.display='block';
}