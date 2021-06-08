import './App.css';
import Button from './components/Button/Button'
function App() {
  let counter = 0;
  return (
    <div className="App">
      Demat Breizh - {counter}
      <hr/>
      <Button bgcolor="green" clickAction={argument=>{
        counter++
        console.log('Depuis App : ' + argument + ' compteur : ' + counter);
      }}>
        <img src="https://cdn1.iconfinder.com/data/icons/science-technology-outline/91/Science__Technology_23-256.png" alt ="click" />
        Hello
      </Button>
      <Button bgcolor="tomato" isItalic={false}  clickAction={argument=>{
        console.log('Depuis App 2 : ' + argument);
      }}><h1>Benj</h1></Button>
      <Button bgcolor="skyblue"  clickAction={argument=>{
        console.log('Depuis App 3 : ' + argument);
      }}>Vert</Button>
      <Button title="test">Jaune</Button>
    </div>
  );
}

export default App;
