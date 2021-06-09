import React from 'react';
import MemeForm from './components/MemeForm/MemeForm';
import Flexlayout from './components/Flexlayout/Flexlayout';
/**
 * Composant principale de notre application
 */
class App extends React.Component{
  //counter = 0;

  constructor(props){
    super(props);
    this.state={
      current:{
        titre:'',
        x:0,
        y:0,
        text:'',
         image:0
      }
    };
  }

  componentDidUpdate(){
    console.log(arguments);
    console.log(this.state);
  }

  render(){
    return <div className="App">
      <Flexlayout>
        <div></div>
        <MemeForm onSubmit={formState => this.setState({current: formState})}>
        </MemeForm>
      </Flexlayout>
      {JSON.stringify(this.state)}
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