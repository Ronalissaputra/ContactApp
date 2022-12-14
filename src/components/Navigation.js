import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiLogOut, FiPlusCircle } from "react-icons/fi";
import PropTypes from "prop-types";

function Navigation({ logout, name }) {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">
            <FiHome></FiHome>
          </Link>
        </li>
        <li>
          <Link to="/add">
            <FiPlusCircle></FiPlusCircle>
          </Link>
        </li>
        <li>
          <button onClick={logout}>
            {name}
            <FiLogOut />
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
