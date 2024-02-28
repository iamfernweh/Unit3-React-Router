import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {


  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="main-section">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blue' element={<Blue />} />
            <Route path='/red' element={<Red />} />
          </Routes>
        </div>
        <div class='footer'>
          <Nav />
        </div>
      </div>
    </>
  );
}

export default App;
