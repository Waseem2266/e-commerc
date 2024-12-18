
import './App.css';
import { Route, Routes } from "react-router-dom"
import Pro from './components/products';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home';
import Footer from './components/Footer';
import About from './components/About';
function App() {
  return (

    <div className="App">
      <Navbar />
      <div style={{marginTop:"70px"}}>
        <Routes>


          <Route path='hm' element={<Home />} />
          <Route path='Products' element={<Pro />} />
          <Route path='about' element={<About />} />
        </Routes>
        </div>
  

      <Footer />

    </div>
  );
}

export default App;
