import React, { useState } from 'react';
import './App.scss';

import FormPage from './pages/FormPage/FormPage';
import RoulettePage from './pages/RoulettePage/RoulettePage';
import QuizPage from './pages/QuizPage/QuizPage'
import EndPage from './pages/EndPage/EndPage'

import {initializeApp} from "firebase/app"
import questionsJson from './pages/QuizPage/questions.json'

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyAjaKM6iwRtR2xGkfOx_DUzhzAphvkcbyY",
    authDomain: "nacionseguros-3662a.firebaseapp.com",
    databaseURL: "https://nacionseguros-3662a-default-rtdb.firebaseio.com/",
    projectId: "nacionseguros-3662a",
    storageBucket: "nacionseguros-3662a.appspot.com",
    messagingSenderId: "961455310490",
    appId: "1:961455310490:web:1ceb339eac5a2b9bffc123"
  };

  const app = initializeApp(firebaseConfig)

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const [section, setSection] = useState(2);
  const [theme, setTheme] = useState(0);

  const handleSection = (page) => {
    setSection(page);
  }

  const handleTheme = (r) => {
    setTheme(r);
  }

  /*const questions = questionsJson.forEach((element)=>{
    shuffle(element)
  })*/

  return (
    <div className="App">      
      {section === 0 && <FormPage app={app} handleSection={handleSection} />}
      {section === 1 && <RoulettePage handleSection={handleSection} handleTheme={handleTheme} />}
      {section === 2 && <QuizPage handleSection={handleSection} theme={theme} />}
      {section === 3 && <EndPage handleSection={handleSection} />}
    </div>
  );
}

export default App;
