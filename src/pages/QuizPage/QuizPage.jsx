import React from 'react'
import './QuizPage.scss'
import Logo from '../../img/logos/logoAzul.png'

export default function QuizPage() {
  /*
  const preguntas = ["Pregunta 1", "Pregunta 2", "Pregunta 3", "Pregunta 4", "Pregunta 5"];
  const respuestasCorrectas = [1,0,2,1,3];
  const respuestas = [["Opcion A","Opcion B", "Opcion C", "Opcion D"],["Opcion A","Opcion B", "Opcion C", "Opcion D"],["Opcion A","Opcion B", "Opcion C", "Opcion D"],["Opcion A","Opcion B", "Opcion C", "Opcion D"],["Opcion A","Opcion B", "Opcion C", "Opcion D"]];

  const questionText = document.getElementById("question");
  const optionText = [document.getElementById("option1"),document.getElementById("option2"),document.getElementById("option3"),document.getElementById("option4") ]

  var totalQuestions = preguntas.length;
  var questionNum = Math.floor(Math.random() * totalQuestions);

  questionText.innerHTML = preguntas[questionNum];

  for(var i=0; i<=optionText.length; i++){
    optionText[i].innerHTML = respuestas[questionNum][i];
  }

  console.log(questionNum);
  */

  function option(num){
    /*
    if(num == respuestasCorrectas[questionNum]-1){
      console.log("Es correcta");
    }
    else{
      console.log("Es incorrecta");
    }
    */
  }



  return (
    <div className='quiz-page'>
      <img src={Logo} alt="nacion logo" className='logo'/>
      <div id="questionNum">Pregunta 1/5</div>
      <center>
        <div className='question-container'>
          <div id="question">Pregunta 1</div>
        </div>
      
        <div className="options-container">
          <button onClick={option(1)} id="option1">Opcion 1</button>
          <button onClick={option(2)} id="option2">Opcion 2</button>
          <button onClick={option(3)} id="option3">Opcion 3</button>
          <button onClick={option(4)} id="option4">Opcion 4</button>
        </div>
      </center>





    </div>
  )
}
