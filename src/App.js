import logo from './logo.svg';
import './App.css';
//import TesteProps from './components/props/TesteProps';
//import FragmentLista from './components/FragmentLista';
import PropsExpert from './components/props/propsExpert/PropsExpert';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Alterando o JSX
        </p>
        <PropsExpert/>
      </header>
    </div>
  );
}

export default App;
