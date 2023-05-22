import logo from './logo.svg';
import './App.css';
//import HelloWorld from './components/HelloWorld';
import Operacoes from './components/Operacoes';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Operacoes/>
      </header>
    </div>
  );
}

export default App;
