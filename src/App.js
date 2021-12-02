import './App.css';
import DataApintigration from './DataApintigration';
import DisplayBrowser from './DisplayBrowser';
import Get from './Get';
import SetTimeoutWithoutCancellngAPI from './SetTimeoutWithoutCancellngAPI';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Main Page</h1>
        <h3 style={{color:'tomato'}}>Login page ready to create</h3>
        <h3 style={{color:'tomato'}}>Login page ready to create</h3>
        <h2>Getdata added</h2>
        <h2 style={{color:'orangered'}}>Registration page Created</h2>
      <Get />
      <DataApintigration />
      <DisplayBrowser />
      <SetTimeoutWithoutCancellngAPI />
      </header>
    </div>
  );
}

export default App;
