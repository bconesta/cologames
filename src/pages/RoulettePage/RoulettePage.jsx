import React, { useEffect, useState } from 'react'
import Roulette from '../../components/Roulette'
import './RoulettePage.scss'
import Icono from '../../img/logos/icono.png'
import Logo from '../../img/logos/logoAzul.png'

export default function RoulettePage(props) {
    //Los elementos tienen que ser diferentes
    const elements = ["Auto", "Tecno", "Alquiler"]

    const [index, setIndex] = useState(0);
    const [text, setText] = useState("¡Toca para jugar!")

    function handleIndex(i){
        setIndex(i)
        props.handleTheme(i)
        setText("")
        nextPage()
    }

    async function nextPage(){
        await setTimeout(()=>{
            props.handleSection(2)
        }, 15000)
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
