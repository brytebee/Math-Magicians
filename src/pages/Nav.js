import { Link } from 'react-router-dom';
import '../App.css';

const Nav = () => (
  <nav>
    <Link to="/Math-Magicians/">
      <h1>Math Magicians</h1>
    </Link>
    <ul className="list-items">
      <Link to="/Math-Magicians/">
        <li>Home</li>
      </Link>
      <Link to="/Math-Magicians/calculator">
        <li>Calculator</li>
      </Link>
      <Link to="/Math-Magicians/quote">
        <li>Quote</li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
