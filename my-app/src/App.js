import logo from './logo.svg';
import './App.css';
import TesteProps from './components/props/TesteProps';
import Item from './components/propsExpert/Item';
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
        <Item/>
      </header>
    </div>
  );
}

export default App;
