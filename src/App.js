import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreenPage from './components/HomeScreen/HomeScreenPage';
import LoginPage from './components/LogIn/LoginPage';
import SignupPage from './components/SignUp/SignupPage';
import PMHSPage from './components/PMHS/PMHSPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreenPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/pmhs" element={<PMHSPage />} />
      </Routes>
    </Router>
  );
};

export default App;