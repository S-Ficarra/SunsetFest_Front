import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/components/normalize.css'
import '../src/components/common.css'
import '../src/App.css'
import HomePage from './views/HomePage/HomePage';
import CookiesPage from './views/CompliancePages/CookiesPage'
import LegalNoticePage from './views/CompliancePages/LegalNoticePage';
import useScrollToTop from './hooks/useScrollToTop';
import LineUpPage from './views/LineUpPage/LineUpPage';
import BandPage from './views/BandPage/BandPage';
import ContactPage from './views/ContactPage/ContactPage';
import PressPage from './views/PressPage/PressPage';
import SucessPage from './views/SucessPage/SucessPage';

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
          <Route path='/lineup' element={<LineUpPage/>}/>
          <Route path='/lineup/:id/:name' element={<BandPage/>} />
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/cookies' element={<CookiesPage/>}/>
          <Route path='/mentionlegales' element={<LegalNoticePage/>}/>
          <Route path='/presse' element={<PressPage/>}/>
          +<Route path='/sucess' element={<SucessPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
