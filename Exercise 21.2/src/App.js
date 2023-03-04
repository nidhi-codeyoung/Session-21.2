import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            <p>Now let's learn about some important extentions,
           that you need to download in Visual Studio Code:</p>
          <ol type="1">
            <li>Auto Rename Tag</li>
            <li>Better Comments</li>
            <li>Bracket Pair Color DLW</li>
            <li>ES7 React/Redux/GraphQL/React-Native Snippets</li>
            <li>Live Server</li>
            <li>Prettier-Code formatter</li>
            <li>Thunder Client</li>
          </ol>
        </a>
      </header>
    </div>   
  );
}

export default App;
