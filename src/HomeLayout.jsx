import { Link } from "react-router-dom";

const HomeLayout = ({ children }) => {
  return (
    <div className="home-layout">
      <h2 className="home-layout-title">{children}</h2>
      <div className="home-layout-btn">
        <Link to="/user">
          <button>User Home Sector</button>
        </Link>
        <Link to="/admin">
          <button>Admin Home Sector</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeLayout;
