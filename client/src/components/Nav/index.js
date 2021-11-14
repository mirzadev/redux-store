import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import './style.css';

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory" class="order-history">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a class="logout-option" href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/login" class="login">
              Login
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/signup" class="signup">
              Signup
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1 class="company-name">
        <Link to="/">
          <img src="/images/discount-product-fl-logo.png" role="img" aria-label="JLM Logo" class="app-logo" style={{ width: 75, height: 75 }} />
          <img src="/images/discount-product-fl.jpg" role="img" aria-label="JLM Heading" class="app-heading" style={{ width: 700, height: 75 }} />

        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
