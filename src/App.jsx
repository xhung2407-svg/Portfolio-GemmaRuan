import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AchievementsDetail from './pages/AchievementsDetail';
import Research from './pages/Research';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="achievements" element={<AchievementsDetail />} />
          <Route path="research" element={<Research />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
