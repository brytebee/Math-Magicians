import Calculator from './components/calculator';
import Nav from './pages/Nav';
import Footer from './pages/Footer';
import './App.css';
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => (
  <>
    <Nav />
    <Home />
    <Quote />
    <Calculator />
    <Footer />
  </>
);

export default App;
