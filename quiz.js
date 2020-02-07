function MakeQuiz(questions){
	this.questions = questions;
	this.score = 0;
	this.level = 0;
	this.getQuestion = function(){
		return this.questions[this.level]
	}
	this.userAnswer = function(answers){
		if (answers == this.getQuestion().odgovor) {
			this.score += this.getQuestion().bodovi
		}
		this.level++;
		
	}
	this.isQuizEnd = function(){

		if (this.level == this.questions.length) {
			return true
		}else {
			return false
		}
	}
}
let quiz = new MakeQuiz(questions)
