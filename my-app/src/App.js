import logo from './logo.svg';
import './App.css';
//import TesteProps from './components/props/TesteProps';
//import Item from './components/propsExpert/Item';
import TesteEstilo from './components/moduleCss/TesteEstilo'
//import FragmentLista from './components/FrangmentList';
//import HelloWorld from './components/HelloWorld';
//import Operacoes from './components/Operacoes';
//import Variaveis from './components/UsandoVariaveis';
import Evento4 from './components/eventoProps/evento4'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TesteEstilo/>
        <Evento4 />
      </header>
    </div>
  );
}

export default App;
