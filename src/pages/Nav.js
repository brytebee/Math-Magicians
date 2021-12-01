import { Link } from 'react-router-dom';
import '../App.css';

const Nav = () => (
  <nav>
    <Link underline="none" to="/">
      <h1>Math Magician</h1>
    </Link>
    <ul className="list-items">
      <Link underline="none" to="/">
        <li>Home</li>
      </Link>
      <Link underline="none" to="/calculator">
        <li>Calculator</li>
      </Link>
      <Link underline="none" to="/quote">
        <li>Quote</li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
