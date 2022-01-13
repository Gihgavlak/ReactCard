import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
//import Primeiro from './components/Primeiro';
//import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'

ReactDOM.render(
    <div>
        <ComFilhos>
            <ul>
               <li>Ana</li>
               <li>Bia</li>
               <li>Carlos</li>
               <li>Daniel</li>
            </ul>
        </ComFilhos>

        {/*<Primeiro/>
        <ComParametro titulo="Esse é o título"
        subtitulo="Esse é o subtitulo"/>*/}
    </div>,
   
    document.getElementById('root')

)