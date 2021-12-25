import React from 'react';
import './App.css';
const Button = React.lazy(() => import("ccomponent/button"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback="Loading Slides">
        <Button>hello</Button>
      </React.Suspense>
    </div>
  );
}

export default App;
