import React, { useState } from 'react'
import './EndPage.scss'
import logoBlanco from "../../img/logos/logoBlanco.png"

export default function EndPage(props) {
  setTimeout(next, 7000);
  function next(){
    props.handleSection(0);
  }

  return (
    <div className='end-page'>
      <center>
        <img src={logoBlanco} alt="nacion logo" className='logo'/>
        <div className='text'>
          <h2>¡Muchas gracias por participar!</h2>
        </div>
      </center>
    </div>
  )
}
