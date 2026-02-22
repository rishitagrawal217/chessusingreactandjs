import './app.css';
import Game from './components/game';

function App() {
  return (
    <div className="app">
      <header className="bg-black p-2 white">
        <nav className="d-grid nav-grid align-items-center">
          <div className="d-flex justify-content-center"><h1 className="m-0">Chess</h1></div>
        </nav>
      </header>
      <Game />
    </div>
  );
}

export default App;
