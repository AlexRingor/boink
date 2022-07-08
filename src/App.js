import './styles/App.css';
// import Recommended from './Recommended'
// import Notifications from './Notifications'
import React, {Suspense} from 'react'

const Recommended = React.lazy(() => {
  return import('./Recommended')
})

const Notifications = React.lazy(() => {
  return import('./Notifications')
})


function App() {
  return (
    <div className="App">
      <h1>SW Coding Challenge</h1>
      <Suspense fallback={<h1>You are seeing this because 'Internet' decide to take is slow</h1>} >
        <Recommended />
        <Notifications />
      </Suspense>
      <br></br>
      
    </div>
  );
}

export default App;
