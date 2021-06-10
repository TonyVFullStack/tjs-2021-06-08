import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './MemePreview.module.css';
import { Link, useParams } from 'react-router-dom';
import Memeviewer from '../Memeviewer/Memeviewer';
import store, { initialState, PUBLIC_ACTION_CURRENT, PUBLIC_ACTION_GLOBAL } from '../../store/store';
import {
  BrowserRouter as Router,
  Route,
  withRouter
} from 'react-router-dom'

const MemePreview = (props) => {
  
  const [state, setstate] = useState({});
  const memeId = useParams().memeId;

  useEffect(() => {
    setstate(store.getState().meme.current);
    store.subscribe(()=>{
      setstate(store.getState().meme.current);
    })

    if(undefined !== memeId){
      store.dispatch({type:PUBLIC_ACTION_CURRENT.LOAD_CURRENT, value:memeId})
    }

  }, []);

  return memeId && state !== null?(
    <div className={styles.MemePreview} data-testid="MemePreview">
      <Link to={'/edit/' + memeId }>
        <Memeviewer meme={{...state, image:store.getState().datas.images.find(e => e.id===state.imageId)}}></Memeviewer>
      </Link>
    </div>
  ):null;
}
MemePreview.propTypes = {};

MemePreview.defaultProps = {};

export default withRouter(MemePreview);
