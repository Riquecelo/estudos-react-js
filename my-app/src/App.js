import logo from './logo.svg';
import './App.css';
import FragmentLista from './components/FrangmentList';
import TesteProps from './components/TesteProps';
//import HelloWorld from './components/HelloWorld';
//import Operacoes from './components/Operacoes';
//import Variaveis from './components/UsandoVariaveis';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <FragmentLista/>
        <TesteProps/>
      </header>
    </div>
  );
}

export default App;
