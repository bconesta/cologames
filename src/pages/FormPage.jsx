import React, { useEffect } from 'react'
import './FormPage.scss'
import logoBlanco from "../img/logos/logoBlanco.png"

export default function FormPage(props) {

  function submit(){
    var nombre = document.getElementById("nombre").value;
    var provincia = document.getElementById("provincia").value;
    var localidad = document.getElementById("localidad").value;
    var email = document.getElementById("email").value;
    var checkbox = document.getElementById("newsletter").checked;
  }
  
  return (
    <div className='form-page'>
      <center>
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
                <option value="1">Buenos Aires</option>
                <option value="2">Catamarca</option>
                <option value="5">Chaco</option>
                <option value="6">Chubut</option>
                <option value="50">CABA</option>
                <option value="3">Cordoba</option>
                <option value="4">Corrientes</option>
                <option value="7">Entre Rios</option>
                <option value="8">Formosa</option>
                <option value="9">Jujuy</option>
                <option value="10">La Pampa</option>
                <option value="11">La Rioja</option>
                <option value="12">Mendoza</option>
                <option value="13">Misiones</option>
                <option value="14">Neuquen</option>
                <option value="15">Rio Negro</option>
                <option value="16">Salta</option>
                <option value="17">San Luis</option>
                <option value="19">Santa Cruz</option>
                <option value="20">Santa Fe</option>
                <option value="21">Santiago Del Estero</option>
                <option value="22">Tierra Del Fuego</option>
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
