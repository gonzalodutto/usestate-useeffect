import "./App.css";
import LikeCounter from "./components/LikeCounter";
import AwesomeAnimals from "./components/AwesomeAnimals";

function App() {
  return (
    <div className="App">
      <main>
        <h1>Some Simple Title</h1>
        <LikeCounter />
        <AwesomeAnimals />
      </main>
    </div>
  );
}

export default App;
