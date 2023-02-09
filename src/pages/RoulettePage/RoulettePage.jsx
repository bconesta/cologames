import React, { useEffect, useState } from 'react'
import Roulette from '../../components/Roulette'
import './RoulettePage.scss'
import Icono from '../../img/logos/icono.png'
import Logo from '../../img/logos/Logo_Nacion_Seguros.png'

export default function RoulettePage() {
    //Los elementos tienen que ser diferentes
    const elements = ["Auto", "Tecno", "Alquiler", "Bicicleta", "Hogar", "Bruno", "Serra", "Hola"]

    const [index, setIndex] = useState(0);
    const [text, setText] = useState("¡Toca para jugar!")

    function handleIndex(i){
        setIndex(i)
        setText("")
    }


    return (
        <div className='page'>
            <div className="logo">
                <img src={Logo} alt="nacion logo" />
            </div>
            <Roulette 
            size="45%" 
            elements={elements} 
            turns={20} time={10} 
            handleIndex={handleIndex}
            logo={Icono}
            />
            <h1 style={{position : "absolute", top : 0}}>{index}</h1>
            <h1 style={{position : "absolute", bottom : '5%'}}>{text}</h1>
        </div>
    )
}
