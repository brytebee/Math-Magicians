import { Routes, Route } from 'react-router-dom';
import Nav from './pages/Nav';
import Footer from './pages/Footer';
import './App.css';
import Home from './pages/Home';
import Calculator from './components/calculator';
import Quote from './pages/Quote';

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
    <Footer />
  </>
);

export default App;
