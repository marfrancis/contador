import React from 'react';
import Contador from './Contador';
import '../assets/css/app.css';


export default class App extends React.Component {

  render(){
    return (
      <div class="container">
      <h1> Olá Mundo </h1>
      <Contador />
      </div>
    )
  }
}


