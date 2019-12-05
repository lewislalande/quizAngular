import { Component, OnInit } from '@angular/core';
import { Question } from "../question";
import { QuizServiceService } from "../quiz-service.service";

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  questions: Question[]
  iQuestion = 0 
  currentQuestion: Question
  Proposition = []
  answer: string
  found: boolean
  hasNext = true
  error: String
  questionEqualZero = false

  constructor(private myService: QuizServiceService) { }

  ngOnInit() {
    if(this.iQuestion == 0){
      this.questionEqualZero = true
    }
    this.myService.buildNewQuiz().subscribe(
      (questions: Question[]) => this.questions = questions,
      error => this.error = error.message)
  }

  newGame(){
    let pays = new Array()
    let Continent = new Array()
    let bonneReponse = new Array()
    let Proposition = new Array()
    this.iQuestion++
    this.questionEqualZero = false
    this.questions.forEach(question => {
      pays.push(question.pays)
    })
    let randomPays = pays[Math.floor(Math.random()*pays.length)];
    this.questions.forEach(question => {
    if(question.pays == randomPays){
        Continent.push(question.continent)    
    }})
    this.questions.forEach(question =>{
      if(question.pays == randomPays){
        bonneReponse.push(question.capitale)
      }
    })
    this.questions.forEach(question =>{
      if(question.continent == Continent.toString()){
        Proposition.push(question.capitale)
      }
    })
    let randomProp = new Array()
    for (let i = 0; i < 3; i++){
      randomProp.push(Proposition[Math.floor(Math.random()*Proposition.length)])
    }
    this.currentQuestion = randomPays
    this.answer = bonneReponse.toString()
    randomProp.push(this.answer)
    randomProp = this.myService.shuffle(randomProp)
    this.Proposition = randomProp
    this.loadNextQuestion()
  }

  loadNextQuestion(){
    if(!this.questionEqualZero){
      let Question = document.createElement("h1")
      Question.innerHTML = "Quel est la capitale de "+this.currentQuestion + "?"
      document.body.append(Question)
      var myDiv = document.querySelector("h1");

      for (var i = 0; i < this.Proposition.length; i++) {
          var checkBox = document.createElement("input");
          var label = document.createElement("label");
          checkBox.type = "checkbox";
          checkBox.value = this.Proposition[i];
          myDiv.appendChild(checkBox);
          myDiv.appendChild(label);
          label.appendChild(document.createTextNode(this.Proposition[i]));
      }
    }
  }


  timeSpent(){

  }

  // answerGiven(answer: String){
  //   let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  //  let reponse = ""
  //  for (var i = 0; i < checkboxes.length; i++) {
  //        var currentProp = checkboxes[i];
  //        reponse = currentProp.checked.toString()
  //  }
  //  return reponse;
  // }

  showAnswer(){

  }
}
