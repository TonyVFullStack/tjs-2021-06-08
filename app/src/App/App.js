import './App.css';
import Button from './components/Button/Button'
function App() {
  return (
    <div className="App">
      Demat Breizh
      <hr/>
      <Button>
        <img src="https://cdn1.iconfinder.com/data/icons/science-technology-outline/91/Science__Technology_23-256.png" alt ="click" />
        Hello
      </Button>
      <Button title="Benjamin"></Button>
      <Button title="Cliquez ici"></Button>
      <Button title="Cliquez pas ici"></Button>
    </div>
  );
}

export default App;
