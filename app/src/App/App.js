import React from 'react';
import MemeForm from './components/MemeForm/MemeForm';
import Flexlayout from './components/Flexlayout/Flexlayout';
import {REST_ADR_SRV} from './config/config';
import Memeviewer from './components/Memeviewer/Memeviewer';
import FlowLayout from './components/FlowLayout/FlowLayout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import store, {initialState, globalInitialState} from './store/store'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

/**
 * Composant principale de notre application
 */
class App extends React.Component{
  //counter = 0;

  constructor(props){
    super(props);
    this.state={
      ...initialState,
      ...globalInitialState
    };
  }

  componentDidMount(){
    this.setState({...store.getState().meme, ...store.getState().datas});

    store.subscribe(()=>{
      console.log('Etat de app mis a jour par subscribe');
      this.setState({...store.getState().meme, ...store.getState().datas});
    });

    fetch(`${REST_ADR_SRV}/images`)
    .then(flux=>flux.json())
    .then(arr=>this.setState({images:arr}));
  }

  componentDidUpdate(){
    console.log(arguments);
    console.log(this.state);
  }

  render(){
    return <Router>
      <Header />
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/" exact>Racine</Route>
          <Route path="/thumbnail">
          <FlowLayout>
            {this.state.memes.map((elem,i)=><Memeviewer key={'meme-'+i} meme={{
              ...elem,
              image: this.state.images.find(e => e.id === elem.imageId)
            }} />)}
          </FlowLayout>
          </Route>
          <Route path="/new">
            <Flexlayout>
              <div>
                <Memeviewer meme={{...this.state.current, image:this.state.images.find(e => e.id===this.state.current.imageId)}}></Memeviewer>
              </div>
              <MemeForm onSubmit={formState => this.setState({current: formState})} images={this.state.images}>
              </MemeForm>
            </Flexlayout>
          </Route>
          <Route path="/edit/:memeId">
            <Flexlayout>
              <div>
                <Memeviewer meme={{...this.state.current, image:this.state.images.find(e => e.id===this.state.current.imageId)}}></Memeviewer>
              </div>
              <MemeForm onSubmit={formState => this.setState({current: formState})} images={this.state.images}>
              </MemeForm>
            </Flexlayout>
          </Route>

        </Switch>
      </div>
      <Footer />
      
    </Router>;
  }
}

export default App;

// {this.state.maChaine} Voici le compteur : {this.state.counter}
// <Button bgcolor="green" clickAction={argument=>{
//   this.setState({counter: this.state.counter + 1});
//   console.log('Depuis App : ' + argument + ' compteur : ' + this.state.counter);
// }}>
//   <img src="https://cdn1.iconfinder.com/data/icons/science-technology-outline/91/Science__Technology_23-256.png" alt ="click" />
//   Hello
// </Button>