import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="heading">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo"></img>
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
