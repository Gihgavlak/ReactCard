import React, { Component } from "react";
import './Contador.css'
import Display from "./Display";
import PassoForm from "./PassoForm";
import Botoes from "./Botoes";

export default class Contador extends Component {

    constructor(props){
        super(props)
        this.state = {
            passo: props.passo || 1,
            valor: props.valor || 0,
        }
    }

    inc = () =>{
        this.setState({
            valor: this.state.valor + this.state.passo
        })

    }

    dec = () =>{
        this.setState({
            valor: this.state.valor - this.state.valor
        })

    }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso

        })
    }
    

    render(){
        return (
            <div className="Contador">
                <h2>Contador</h2>
                
               <PassoForm passo={this.state.passo}
                    onPassoChange={this.mudarPasso}></PassoForm>
                <Display valor={this.state.valor}> </Display>
                <Botoes onInc={this.inc} onDec={this.dec}></Botoes>
               
            </div>
        )
    }

}