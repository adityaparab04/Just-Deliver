import React from "react";
import ReactDom from "react-dom/client";
import logo from "./assets/logo1.png";

const Header = () => {
  return (
    <div className='heading'>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='logo'></img>
      </div>
      <div className='nav-container'>
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

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
