import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// Import other components for the routes
import Home from './pages/Home';
import Company from './pages/Company';
import Work from './pages/Work';
import Learn from './pages/Learn';
import Career from './pages/Career';
import HireUs from './pages/HireUs';
import Services from './pages/Services';
import Footer from './components/Footer';
import './App.css';
const App = () => {
    return (
      <BrowserRouter>
        <nav>
          <Navbar />
        </nav>
        <>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/company" element={<Company />} />
              <Route path="/work" element={<Work />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/career" element={<Career />} />
              <Route path="/hire-us" element={<HireUs />} />
              <Route path="/services" element={<Services />} />
          </Routes>
        </>
        <footer>
          <Footer/>
        </footer>
      </BrowserRouter>
    );
};

export default App;
