import React from 'react';
import Button from './components/Button/Button';

/**
 * Composant principale de notre application
 */
class App extends React.Component{
  //counter = 0;

  constructor(props){
    super(props);
    this.state={counter: 0, maChaine:'Hello'};
  }

  componentDidUpdate(){
    console.log(arguments);
    console.log(this.state);
  }

  render(){
    return <div className="header">
      {this.state.maChaine} Voici le compteur : {this.state.counter}
      <Button bgcolor="green" clickAction={argument=>{
        this.setState({counter: this.state.counter + 1});
        console.log('Depuis App : ' + argument + ' compteur : ' + this.state.counter);
      }}>
        <img src="https://cdn1.iconfinder.com/data/icons/science-technology-outline/91/Science__Technology_23-256.png" alt ="click" />
        Hello
      </Button>
    </div>;
  }
}

export default App;

