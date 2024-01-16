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

const RestaurantCard = () => {
  return (
    <div className='restaurant-card'>
      <img
        className='restaurant-logo'
        alt='res-logo'
        src='https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/e5e9af30-b1c5-4362-b954-ab7809a15e64.png'
      />
      <div className='restaurant-details'>
        <h3>Buffalo Wild Wings</h3>
        <h3>3.8 Stars</h3>
        <h3>38 mins</h3>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='restaurant-card-container'>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
