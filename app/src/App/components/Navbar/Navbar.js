import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import {
  Link
} from 'react-router-dom'

const Navbar = () => (
    <nav className={styles.Navbar+"navbar navbar-inverse"}>
      <Link className="navbar-brand" to="/">Meme.js</Link>
      <ul className="nav navbar-nav">
        <li className="active">
          <Link to="/thumbnail">Thumbnail</Link>
        </li>
        <li>
          <Link to="/new">Nouveau meme</Link>
        </li>
        <li>
          <Link to="/edit/1">Edit 1</Link>
        </li>
      </ul>
   </nav>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
