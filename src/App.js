import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/components/normalize.css'
import '../src/App.css'
import HomePage from './views/HomePage/HomePage';
import CookiesPage from './views/CompliancePages/CookiesPage'
import LegalNoticePage from './views/CompliancePages/LegalNoticePage';
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
          <Route path='/mentionlegales' element={<LegalNoticePage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
