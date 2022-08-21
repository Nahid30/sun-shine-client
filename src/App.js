import {Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
