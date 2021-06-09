import React from 'react';
import PropTypes from 'prop-types';
import styles from './Memeviewer.module.css';
import {BASE_IMG_URL} from '../../config/config';

const Memeviewer = (props) => (
  <svg className={styles.Memeviewer} data-testid="Memeviewer" viewBox={'0 0 '+ (props.meme.image?`${props.meme.image.w} ${props.meme.image.h}`:'0 0')}>
    {props.meme.image && <image href={`${BASE_IMG_URL}${props.meme.image.url}`} x={props.meme.image.x} y={props.meme.image.y} />}
    <text x={props.meme.x} y={props.meme.y} fill={props.meme.color} fontSize={props.meme.fontsize}>{props.meme.text}</text>
  </svg>
);

Memeviewer.propTypes = {meme:PropTypes.object.isRequired};

Memeviewer.defaultProps = {};

export default Memeviewer;
