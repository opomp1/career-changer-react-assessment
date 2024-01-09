import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
