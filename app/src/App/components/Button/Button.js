import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
    console.log(props);
    return <button onClick={evt => {
        alert(`J'ai cliqué ` + evt.target.innerText);
        console.warn(evt);
    }}
     className='Button'
     style={
         {
             backgroundColor:props.bgcolor,
              fontStyle:(props.isItalic?'italic':'normal')
         }
     }
     >
         {props.children}
    </button>;
}

Button.propTypes = {
    children:PropTypes.any.isRequired,
    bgcolor:PropTypes.string.isRequired
}

Button.defaultProps = {
    bgcolor: 'aquamarine',
    isItalic: true
}
export default Button;