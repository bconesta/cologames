import React, { useEffect, useState } from 'react'
import './QuizPage.scss'
import Logo from '../../img/logos/logoAzul.png'

export default function QuizPage() {

  const [question, setQuestion] = useState("");
  const [option, setOption] = useState([]);
  
  const preguntas = ["Pregunta 1", "Pregunta 2", "Pregunta 3", "Pregunta 4", "Pregunta 5"];
  const respuestasCorrectas = [1,0,2,1,3];
  const respuestas = [["Opcion A","Opcion B", "Opcion C", "Opcion D"],["Opcion A","Opcion B", "Opcion C", "Opcion D"],["Opcion A","Opcion B", "Opcion C", "Opcion D"],["Opcion A","Opcion B", "Opcion C", "Opcion D"],["Opcion A","Opcion B", "Opcion C", "Opcion D"]];

  useEffect(()=>{onLoad()}, [])

  function onLoad(){
    const questionText = document.getElementById("question");

    var totalQuestions = preguntas.length;
    let questionNum = Math.floor(Math.random() * totalQuestions);

    var question = preguntas[questionNum];

    for(var i=0; i<=option.length; i++){
      optionText[i].innerHTML = respuestas[questionNum][i];
    }

    console.log(questionNum);
  }
  

  function option(num){
    if(num == respuestasCorrectas[questionNum]-1){
      console.log("Es correcta");
    }
    else{
      console.log("Es incorrecta");
    }
  }



  return (
    <div className='quiz-page'>
      <img src={Logo} alt="nacion logo" className='logo'/>
      <div id="questionNum">Pregunta 1/5</div>
      <center>
        <div className='question-container'>
          <div id="question">{question}</div>
        </div>
      
        <div className="options-container">
          <button onClick={()=>{option(1)}} id="option1">{option[0]}</button>
          <button onClick={()=>{option(2)}} id="option2">{option[1]}</button>
          <button onClick={()=>{option(3)}} id="option3">{option[2]}</button>
          <button onClick={()=>{option(4)}} id="option4">{option[3]}</button>
        </div>
      </center>
    </div>
  )
}
