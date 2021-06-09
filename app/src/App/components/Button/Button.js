import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
    console.log(props);
    const [clicked, setclicked] = useState({clicked:false, disabled:false});
    return <button onClick={evt => {
        //alert(`J'ai cliqué ` + evt.target.innerText);
        setclicked({...clicked, clicked:true, disabled: true});
        setTimeout(()=>{
            setclicked({...clicked, clicked:false});
        }, 300);

        setTimeout(()=>{
            setclicked({...clicked, disabled: false});
        }, 1000);
        console.warn(evt);
        props.clickAction(evt.target.innerText);
     }}
     className={'Button'+(clicked.clicked ? ' clicked' : '')+(clicked.disabled ? ' disabled' : '')}
     disabled={clicked.disabled?'disabled':''}
     style={{
            backgroundColor:props.bgcolor,
            fontStyle:(props.isItalic?'italic':'normal')
         }}>
     {props.children}
    </button>;
}

Button.propTypes = {
    children:PropTypes.any.isRequired,
    bgcolor:PropTypes.string.isRequired,
    clickAction:PropTypes.func.isRequired
}

Button.defaultProps = {
    bgcolor: 'aquamarine',
    isItalic: true,
    clickAction: ()=>{
        console.log('Default Prop : ');
      }
}
export default Button;