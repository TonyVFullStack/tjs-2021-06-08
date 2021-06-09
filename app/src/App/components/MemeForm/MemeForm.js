import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';

const MemeForm = (props) => {
  const [state, setstate] = useState({titre: 'bla', x:10, y:20, text:'coucou', image: 1});

  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form onSubmit={(evt)=>{
        // Cancel Refresh
        evt.preventDefault();
        props.onSubmit(state);
      }}>
        <label htmlFor="titre">Titre</label><br/><input onChange={evt => {
          setstate({...state, titre:evt.target.value})
        }} type="text" id="titre" placeholder="Saisissez le titre" value={state.titre}/>
        <hr/>
        <label htmlFor="image">Image</label><br/><select value={state.image} onChange={evt => {
          setstate({...state, image:evt.target.value})
        }}><option value="1">img.jpg</option><option value="2">img2.jpg</option></select>
        <hr/>
        <label htmlFor="text">Texte</label><br/><input type="text" id="text" value={state.text} onChange={evt => {
          setstate({...state, text:evt.target.value})
        }}/>
        <div style={{ textAlign: 'center '}}>
          <div style={{display:'inline-block'}}><label htmlFor="x">X</label><br/><input type="number" id="x" value={state.x} onChange={evt => {
          setstate({...state, x:evt.target.value})
        }}/></div>
          <div style={{display:'inline-block'}}><label htmlFor="y">Y</label><br/><input type="number" id="y" value={state.y} onChange={evt => {
          setstate({...state, y:evt.target.value})
        }}/></div>
        </div>
        <hr/>
        <input type="submit" value="Save" />
        <input type="reset" value="Reset" />
      </form>
      {JSON.stringify(state)}
    </div>
  );
}

MemeForm.propTypes = { onSubmit:PropTypes.func.isRequired};

MemeForm.defaultProps = {};

export default MemeForm;
