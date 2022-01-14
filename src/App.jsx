import React from "react";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import './App.css'
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
<div className="App">
<Card titulo = "Condicional V2" color="#FA6900">
        <CondicionalComIf numero = {10}l> </CondicionalComIf>
    </Card>
    <Card titulo = "Condicional V1">
        <Condicional numero = {11}l> </Condicional>
    </Card>
 <Card titulo="Repetição">
    <Repeticao></Repeticao>
</Card>
    <Card titulo="Componente Com Filhos">
    <ComFilhos>
        <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
        </ul>
    </ComFilhos>
    </Card>
<Card titulo="Componente Com Parametro">
    <ComParametro titulo="Esse é o título" 
    subtitulo= "Esse é o subtitulo"/>
</Card>
{/*<Card titulo="Exercício X">
    Conteudo
</Card>*/}
<Card titulo="Primeiro Componente">
    <Primeiro/>
</Card>

</div>