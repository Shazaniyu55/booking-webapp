import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Contact from './pages/contact';
import About from './pages/about';
import Price from './pages/pricing';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/price' element={<Price/>}/>
       
      </Routes>
  );
}

export default App;
