import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import StateLift from './components/stateLift/StateLift';
import Saudacao from './components/stateLift/Saudacao';




function App() {
  //array usado no RendList
  //const meuItens = ['React', 'Node', 'Jquery'];

  //usando na pratica do state lift
  const [nome, setNome] = useState()

  //npm install react-router-dom
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Usando o conceito de State Lift</h1>
        <StateLift setNome={setNome}/>
        <Saudacao nome={nome}/>
      </header>
    </div>
  );
}

export default App;
