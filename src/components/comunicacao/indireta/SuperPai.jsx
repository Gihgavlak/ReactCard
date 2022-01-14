import React, {useState} from "react";
import SubFilho from './SubFilho'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const [texto, setTexto]= useState('Valor')
    const [num, setNum]= useState(0)

    function quandoClicar(valorGerado, texto){
        setNum(valorGerado)
        setTexto(texto)
    }

    return (
        <div>
    <h4>{texto}: {num} </h4>
    <SubFilho onClicar={quandoClicar}></SubFilho>
</div>
    )
}
