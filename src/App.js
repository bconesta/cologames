import React from 'react';
import './App.scss';
import FormPage from './pages/Form/FormPage';
import {initializeApp} from "firebase/app"
//import RoulettePage from './pages/RoulettePage/RoulettePage';

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

  return (
    <div className="App">      
      <FormPage app={app}/>
    </div>
  );
}

export default App;
