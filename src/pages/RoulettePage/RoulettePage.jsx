import React, { useEffect, useState } from 'react'
import Roulette from '../../components/Roulette'
import './RoulettePage.scss'
import Icono from '../../img/logos/icono.png'
import Logo from '../../img/logos/logoAzul.png'
import ReactConfetti from "react-confetti"

export default function RoulettePage(props) {
    //Los elementos tienen que ser diferentes
    const elements = ["Auto", "Tecno", "Alquiler", "Tecnología"]

    const [index, setIndex] = useState(0);
    const [text, setText] = useState("¡Toca para jugar!");
    const [confetti, setConfetti] = useState(false);

    function handleIndex(i){
        setIndex(i)
        props.handleTheme(i)
        setText("")
        nextPage()
    }

    async function nextPage(){
        await setTimeout(()=>{
            setConfetti(true)
        }, 10000)
        await setTimeout(()=>{
            props.handleSection(2)
            setConfetti(false)
        }, 15000)
    }

    return (
        <div className='page'>
            <ReactConfetti run={confetti} numberOfPieces={200} className="confetti" tweenDuration={10000}/>
            <div className="logo">
                <img src={Logo} alt="nacion logo" />
            </div>
            <Roulette 
            size="65%" 
            elements={elements} 
            turns={20} time={10} 
            handleIndex={handleIndex}
            logo={Icono}
            />
            <h1 className="text">{text}</h1>
        </div>
    )
}
