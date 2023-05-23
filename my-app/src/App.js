import logo from './logo.svg';
import './App.css';
import TesteProps from './components/props/TesteProps';
//import FragmentLista from './components/FrangmentList';
//import HelloWorld from './components/HelloWorld';
//import Operacoes from './components/Operacoes';
//import Variaveis from './components/UsandoVariaveis';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <TesteProps/>
      </header>
    </div>
  );
}

export default App;
