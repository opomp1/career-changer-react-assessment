import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/owner">Owner</Link>
      </li>
    </ul>
  );
};

export default Nav;
