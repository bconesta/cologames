import React, { useEffect, useState } from 'react'
import './QuizPage.scss'
import Logo from '../../img/logos/logoAzul.png'
import questions from './questions.json'

export default function QuizPage(props) {

  const [number, setNumber] = useState(0);
  const [color, setColor] = useState({});
  const [selected, setSelected] = useState(false);
  const [active, setActive] = useState(false);
  const [anim, setAnim] = useState(false);
  
  const option = (event)=>{
    if(!selected){  
      const id = Number(event.target.id);
      const correct = questions[props.theme][props.order[number]].correct;
      let colors = [{}, {}, {}, {}]
      colors[correct] = {backgroundColor : 'green', boxShadow : 'inset 0 -10px 0 #005000'}
      if(correct !== id){
        colors[id] = {backgroundColor : '#F04B1D', boxShadow : 'inset 0 -10px 0 #aa3615'}
      }
      setColor(colors);
      setSelected(true);
      next();
    }
  }

  async function next(){
    setAnim(false);
    setTimeout(()=>{
      setActive(true)
    }, 250)
    await setTimeout(()=>{
      setAnim(true);
      setSelected(false)
      setActive(false)
      setColor([{},{},{},{}])
      if(number+1 === questions[props.theme].length){
        props.handleSection(3)
      }
      else{
        setTimeout(()=>{
          setNumber(number+1)
        }, 750)
      }
      
    }, 3000)
    
  }

  return (
    <div className='quiz-page'>
      <img src={Logo} alt="nacion logo" className='logo'/>
      <div id="questionNum">Pregunta {number+1}/{questions[props.theme].length}</div>
      <center>
        <div className='question-container'>
          <div id="question">{questions[props.theme][props.order[number]].tittle}</div>
        </div>
      
        <div className="options-container" style={{animation: (anim ? 'slide 1.5s ease' : '')}}>
          <button disabled={active} onClick={option} id="0" style={color[0]}>{questions[props.theme][props.order[number]].option[0]}</button>
          <button disabled={active} onClick={option} id="1" style={color[1]}>{questions[props.theme][props.order[number]].option[1]}</button>
          <button disabled={active} onClick={option} id="2" style={color[2]}>{questions[props.theme][props.order[number]].option[2]}</button>
          <button disabled={active} onClick={option} id="3" style={color[3]}>{questions[props.theme][props.order[number]].option[3]}</button>
        </div>
      </center>
    </div>
  )
}
