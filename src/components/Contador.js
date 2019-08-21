import React from "react";
import '../assets/css/contador.css';

export default class Contador extends React.Component {
    constructor(){
        super()
        this.state = {
            contador: 0,
        }

    }

    incrementar(){
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    decrementar(){
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render(){
    return (
        <div className="contador">
        <h1> {this.state.contador} </h1>
        <div>
        <button type="button" class="btn btn-primary" onClick={this.incrementar.bind(this)}>Incrementar</button>
        <button type="button" class="btn btn-primary" onClick={this.decrementar.bind(this)}>Decrementar</button>
        </div>
        </div>
        )
    }
}