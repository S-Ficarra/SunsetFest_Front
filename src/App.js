import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
import '../src/components/normalize.css'
import '../src/App.css'


function App() {
  return (

    <HashRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
