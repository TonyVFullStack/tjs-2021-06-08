import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
import { REST_ADR_SRV } from '../../config/config';
import store, { initialState, PUBLIC_ACTION_CURRENT, PUBLIC_ACTION_GLOBAL } from '../../store/store';
import { useParams } from 'react-router';

const MemeForm = (props) => {
  const [state, setstate] = useState(initialState.current);
  const {id}=useParams();

  useEffect(() => {
    
    console.log("useEffect Subscribe")
    setstate(store.getState().meme.current);
    store.subscribe(()=>{
      setstate(store.getState().meme.current);
    })
  }, []);

  useEffect(() => {
    //props.onSubmit(state);
    console.log("useEffect Dispatch")
    store.dispatch({type:PUBLIC_ACTION_CURRENT.SET_CURRENT, value:state})
    store.dispatch({type:PUBLIC_ACTION_GLOBAL.INITIAL_LOAD, value:''})
  }, [state]);

  console.log(useParams());
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form onSubmit={(evt)=>{
        // Cancel Refresh
        evt.preventDefault();
        store.dispatch({type:PUBLIC_ACTION_CURRENT.SAVE_CURRENT});
      }}>
        <label htmlFor="titre">Titre</label><br/><input onChange={evt => {
          setstate({...state, titre:evt.target.value})
        }} type="text" id="titre" placeholder="Saisissez le titre" value={state.titre}/>
        <hr/>
        <label htmlFor="image">Image</label><br/><select value={state.imageId} onChange={evt => {
          setstate({...state, imageId:Number(evt.target.value)})
        }}>
          {
            props.images.map((el, index)=><option value={el.id} key={"option-image-"+index}>{el.title}</option>)
          }
        </select>
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
        <label htmlFor="color">Couleur</label><br/><input type="color" id="color" value={state.color} onChange={evt => {
          setstate({...state, color:evt.target.value})
        }}/>
        <hr/>
        <label htmlFor="fontsize">Font Size</label><br/><input type="number" id="fontsize" value={state.fontsize} onChange={evt => {
          setstate({...state, fontsize:Number(evt.target.value)})
        }}/>
        <hr/>
        <input type="submit" value="Save" />
        <input type="reset" value="Reset" />
      </form>
    </div>
  );
}

// MemeForm.propTypes = { 
//   onSubmit:PropTypes.func.isRequired,
//   images:PropTypes.array.isRequired
// };

// MemeForm.defaultProps = {};

export default MemeForm;
