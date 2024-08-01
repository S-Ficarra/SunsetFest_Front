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
import AllNewsPage from './views/AllNewsPage/AllNewsPage';
import NewsPage from './views/NewsPage/NewsPage';
import InformationPage from './views/InformationPage/InformationPage';
import MapPage from './views/MapPage/MapPage';
import ProgramPage from './views/ProgramPage/ProgramPage';

export const BASE_URL = 'http://localhost:3000/'

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
          <Route path='/actualites' element={<AllNewsPage/>}/>
          <Route path='/actualites/:id/:title' element={<NewsPage/>} />
          <Route path='/lineup' element={<LineUpPage/>}/>
          <Route path='/lineup/:id/:name' element={<BandPage/>} />
          <Route path='/informations' element={<InformationPage/>} />
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/cookies' element={<CookiesPage/>}/>
          <Route path='/mentionlegales' element={<LegalNoticePage/>}/>
          <Route path='/presse' element={<PressPage/>}/>
          <Route path='/sucess' element={<SucessPage/>}/>
          <Route path='/carte' element={<MapPage/>}/>
          <Route path='/programme' element={<ProgramPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
