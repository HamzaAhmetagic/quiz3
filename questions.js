function MakeQuestions(text,odgovori,odgovor,bodovi,kategorija){
	this.text = text;
	this.odgovori = odgovori;
	this.odgovor = odgovor;
	this.bodovi = bodovi;
	this.kategorija = kategorija;
}
let pitanje1 = new MakeQuestions("glavni grad Bosne",["Beograd","Sarajevo","Zagreb","Ljubljana"],"Sarajevo",5,"automobili")
let pitanje2 = new MakeQuestions("glavni grad Srbije",["Beograd","Sarajevo","Zagreb","Ljubljana"],"Beograd",2,"automobili")
let pitanje3 = new MakeQuestions("glavni grad Hrvatske",["Beograd","Sarajevo","Zagreb","Ljubljana"],"Zagreb",1,"automobili")
let pitanje4 = new MakeQuestions("glavni grad Slovenije",["Beograd","Sarajevo","Zagreb","Ljubljana"],"Ljubljana",6,"automobili")
let questions = [pitanje1,pitanje2,pitanje3,pitanje4];
