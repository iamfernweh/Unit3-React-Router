import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Blue from './components/Blue';
import Red from './components/Red';

function App() {


  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to='/red'>Red</Link>
          <Link to='/blue'>Blue</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path='/blue' element={<Blue />} />
            <Route path='/red' element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
