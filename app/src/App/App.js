import React from 'react';
import MemeForm from './components/MemeForm/MemeForm';
import Flexlayout from './components/Flexlayout/Flexlayout';
import {REST_ADR_SRV} from './config/config';
import Memeviewer from './components/Memeviewer/Memeviewer';
/**
 * Composant principale de notre application
 */
class App extends React.Component{
  //counter = 0;

  constructor(props){
    super(props);
    this.state={
      images:[],
      current:{
        titre:'',
        x:0,
        y:0,
        text:'',
        image:0,
        fontsize:0
      }
    };
  }

  componentDidMount(){
    fetch(`${REST_ADR_SRV}/images`)
    .then(flux=>flux.json())
    .then(arr=>this.setState({images:arr}));
  }

  componentDidUpdate(){
    console.log(arguments);
    console.log(this.state);
  }

  render(){
    return <div className="App">
      <Flexlayout>
        <div>
          <Memeviewer meme={{...this.state.current, image:this.state.images.find(e => e.id===this.state.current.imageId)}}></Memeviewer>
        </div>
        <MemeForm onSubmit={formState => this.setState({current: formState})} images={this.state.images}>
        </MemeForm>
      </Flexlayout>
    </div>;
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