import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AchievementsDetail from './pages/AchievementsDetail';
import Research from './pages/Research';
import International from './pages/International';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="achievements" element={<AchievementsDetail />} />
          <Route path="research" element={<Research />} />
          <Route path="international" element={<International />} />
        </Route>
      </Routes>

    </Router>
  );
}

export default App;
