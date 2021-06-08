import './App.css';
import Button from './components/Button/Button'
function App() {
  return (
    <div className="App">
      Demat Breizh
      <hr/>
      <Button bgcolor="green">
        <img src="https://cdn1.iconfinder.com/data/icons/science-technology-outline/91/Science__Technology_23-256.png" alt ="click" />
        Hello
      </Button>
      <Button bgcolor="tomato" isItalic={false} ><h1>Benj</h1></Button>
      <Button bgcolor="skyblue">Vert</Button>
      <Button title="test">Jaune</Button>
    </div>
  );
}

export default App;
