import React, { useEffect } from 'react'
import './FormPage.scss'
import logoBlanco from "../../img/logos/logoBlanco.png"
import { getDatabase, ref, child, push, update } from "firebase/database";


export default function FormPage(props) {

  const db = getDatabase();

  function submit(){
    var alerta = document.getElementById("error")

    var nombre = document.getElementById("nombre").value;
    var provincia = document.getElementById("provincia").value;
    var localidad = document.getElementById("localidad").value;
    var email = document.getElementById("email").value;
    var checkbox = document.getElementById("newsletter").checked;

    checkbox = checkbox === true ? "Si":"No"

    if(nombre == "" || provincia == "" || localidad == "" || email == ""){
      alerta.classList.remove("hide")
    }
    else{
      const obj = {
        "Nombre": nombre,
        "Email" : email,
        "Provincia" : provincia,
        "Localidad" : localidad,
        "Newsletter" : checkbox
      }

      const prevData = localStorage.getItem("data") ? localStorage.getItem("data"):""
      localStorage.setItem("data", prevData+"$"+JSON.stringify(obj))

      fbButton();

    }
  }

  function closeError(){
    var alerta = document.getElementById("error");
    alerta.classList.add("hide");
  }

  function pushFb(postData){
  
    const newPostKey = push(child(ref(db), 'posts')).key;
  
    const updates = {};
    updates[newPostKey] = postData;
  
    update(ref(db), updates);
  }

  function fbButton(){
    const data = localStorage.getItem("data").split("$").slice(1);
    data.forEach(obj=>{
      pushFb(JSON.parse(obj));
    })

    localStorage.clear();
  }
  
  return (
    <div className='form-page'>
      <center>
        <div id='error' className='hide'>
          <div className='box'>
            <h3>Por favor completá todos los datos</h3>
            <button onClick={closeError}>CERRAR</button>
          </div>
        </div>
        <div>
          <img className="logo" src={logoBlanco}></img>
        </div>
        <div className='table-container'>
          <div className='col1'>
            <div className="cont">
              <label htmlFor='nombre'>Nombre y apellido</label>
              <input type="text" id="nombre" name="nombre"/>
            </div>
            <div className="cont">
              <label htmlFor='provincia'>Provincia</label>
              <select id="provincia" name="provincia">
                <option value="" disabled selected>Selecciona una provincia</option>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="CABA">CABA</option>
                <option value="Catamarca">Catamarca</option>
                <option value="Chaco">Chaco</option>
                <option value="Chubut">Chubut</option>
                <option value="Cordoba">Cordoba</option>
                <option value="Corrientes">Corrientes</option>
                <option value="Entre Rios">Entre Rios</option>
                <option value="Formosa">Formosa</option>
                <option value="Jujuy">Jujuy</option>
                <option value="La Pampa">La Pampa</option>
                <option value="La Rioja">La Rioja</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Misiones">Misiones</option>
                <option value="Neuquen">Neuquen</option>
                <option value="Rio Negro">Rio Negro</option>
                <option value="Salta">Salta</option>
                <option value="San Luis">San Luis</option>
                <option value="Santa Cruz">Santa Cruz</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Santiago Del Estero">Santiago Del Estero</option>
                <option value="Tierra Del Fuego">Tierra Del Fuego</option>
              </select>
            </div>
          </div>
          
          <div className='col2'>
            <div className='cont'>
              <label>Email</label>
              <input type="email" id="email"/>
            </div>
            <div className='cont'>
              <label>Localidad</label>
              <input type="text" name="localidad" id="localidad"/>
            </div>
          </div>
        </div>
        <div className='newsletter'>
            <h2>¿Deseas recibir newsletters?</h2>
            <input type="checkbox" id="newsletter"></input>
        </div>
        <button onClick={submit} className="enviar">ENVIAR</button>
      </center>
    </div>
  )
}
