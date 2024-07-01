import './App.css';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        {/* <Route path="/" element={<h1>Home</h1>} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;