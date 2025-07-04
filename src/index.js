import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, HashRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import HomeScreen from './screens/home/HomeScreen';
import AboutMeScreen from './screens/aboutMe/AboutMeScreen';
import SkillsScreen from './screens/skills/SkillsScreen';
import Certificates from './screens/certificates/CertificatesScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
        <Routes>
          <Route element={<App />} >
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="aboutMe" element={<AboutMeScreen />} />
            <Route path="skills" element={<SkillsScreen />} />
            <Route path="certificates" element={<Certificates />} />
        </Route>
      </Routes>q
      </HashRouter>
  </React.StrictMode>
);