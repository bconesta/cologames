import React, { useEffect } from 'react'
import './FormPage.scss'

export default function FormPage(props) {
  
  return (
    <div className='form-page'>
        <div className='logo'>
            {props.ejemplo}
        </div>
        <div className='form-container'>
                <input type="text" name="name" id="nameId" />
                <label htmlFor="name">Name</label>
                <input type="submit" value="Hola" />
        </div>
    </div>
  )
}
