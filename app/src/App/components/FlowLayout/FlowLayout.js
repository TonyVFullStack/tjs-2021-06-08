import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlowLayout.module.css';

const FlowLayout = (props) => (
  <div className={styles.FlowLayout} data-testid="FlowLayout">
    {props.children}
  </div>
);

FlowLayout.propTypes = {};

FlowLayout.defaultProps = {};

export default FlowLayout;
