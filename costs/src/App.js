import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';
import Projects from './components/pages/Projects';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      < NavBar/>
      {/*esta importando os filhos como props para o container */}
      <Container customClass="min-height"> 
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/projects' element={<Projects/>}></Route>
          <Route exact path='/company' element={<Company/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='/newproject' element={<NewProject/>}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
