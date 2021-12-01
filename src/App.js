import './App.css';
import Getdata from './Getdata';
import GitPageBasic from './GitPageBasic';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Main Page</h1>
        <h3 style={{color:'tomato'}}>Login page ready to create</h3>
        <ul>
          <li>idly</li>
          <li>sambar</li>
          <li>wada</li>
        </ul>

    <GitPageBasic />
    <Getdata />
      </header>
    </div>
  );
}

export default App;
