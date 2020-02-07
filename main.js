let pitanjeDiv = document.querySelector(".pitanje-box");
let odgovoriDiv = document.querySelector(".odgovori-box");
let optionsDiv = document.querySelectorAll(".options");
let scoreDiv = document.querySelector(".score");



for (var i = 0; i < optionsDiv.length; i++) {
	optionsDiv[i].addEventListener("click",nextLevel)
}

function nextLevel(){
	console.log(quiz.level)
	 quiz.userAnswer(this.innerHTML)
	displayQuestion()
}


function displayQuestion(){
	if (!quiz.isQuizEnd()) {
		console.log("radi")
		pitanjeDiv.innerHTML = quiz.getQuestion().text;
	for (var i = 0; i < optionsDiv.length; i++) {
		optionsDiv[i].innerHTML = quiz.getQuestion().odgovori[i]
	}
	scoreDiv.innerHTML = (quiz.level+1)+" / " + quiz.questions.length
	} else {
		removeClicks();
		odgovoriDiv.innerHTML = "<h1>"+quiz.score+"</h1>"
}
}
displayQuestion()

console.log(quiz.isQuizEnd())
function removeClicks(){
	for (var i = 0; i < optionsDiv.length; i++) {
		optionsDiv[i].removeEventListener("click",nextLevel)
	}
}