import './App.css';
import Recommended from './Recommended'
import Notifications from './Notifications'
import Suspense from 'react'

function App() {
  return (
    <div className="App">
      <h1>SW Coding Challenge</h1>
      <Recommended />
      <br></br>
      <Notifications />
    </div>
  );
}

export default App;
