import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-Scaffold">
        <h2>
          Use o seu e-mail para entrar
        </h2>
        <input type="email" name="e-mail" placeholder="E-mail" />
        <button
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
        >
          CONTINUAR
        </button>

        <p>Não tem Disney+? <a href='https://www.disneyplus.com/pt-br/login'>Assine</a></p>
        </div>
      </header>
    </div>
  );
}

export default App;
