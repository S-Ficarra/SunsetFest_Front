import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/components/normalize.css'
import '../src/App.css'
import HomePage from './views/HomePage/HomePage';
import CookiesPage from './views/CookiesPage/CookiesPage'
import useScrollToTop from './hooks/useScrollToTop';

function ScrollToTop() {
  useScrollToTop();
  return null;
}

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/cookies' element={<CookiesPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
