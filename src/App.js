import React, { useState } from 'react';
import './App.scss';

import FormPage from './pages/FormPage/FormPage';
import RoulettePage from './pages/RoulettePage/RoulettePage';
import VideoPage from './pages/VideoPage/VideoPage'
import QuizPage from './pages/QuizPage/QuizPage'

import {initializeApp} from "firebase/app"

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

  const [section, setSection] = useState(0);

  const handleSection = (page) =>{
    setSection(page);
  }

  return (
    <div className="App">      
      {section === 0 && <FormPage app={app} handleSection={handleSection} />}
      {section === 1 && <RoulettePage handleSection={handleSection} />}
      {section === 2 && <VideoPage handleSection={handleSection} />}
      {section === 3 && <QuizPage handleSection={handleSection} />}
    </div>
  );
}

export default App;
