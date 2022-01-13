import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro'

ReactDOM.render(
    <div>
         <Primeiro/>
        <ComParametro titulo="Esse é o título"
        subtitulo="Esse é o subtitulo"/>
    </div>,
   
    document.getElementById('root')

)