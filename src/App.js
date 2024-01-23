//App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreenPage from './components/HomeScreen/HomeScreenPage';
import LoginPage from './components/LogIn/LoginPage';
import SignupPage from './components/SignUp/SignupPage';
import PMHSPage from './components/ProjectManagementHomeScreen/PMHSPage';
import ContactusPage from './components/ContactUs/ContactusPage';
import CUDBPage from './components/ContactUsDialogueBox/CUDBPage';
import EVDBPage from './components/EmailVerificationDialogueBox/EVDBPage';
import ForgotPasswordPage from './components/ForgotPassword/ForgotPasswordPage';
import PRCPage from './components/PasswordResetConfirmation/PRCPage';
import PasswordResetPage from './components/PasswordReset/PasswordResetPage';
import PasswordChangedPage from './components/PasswordChanged/PasswordChangedPage';
import TermsOfServicePage from './components/TermsOfService/TermsOfServicePage';
import PrivacyPolicyPage from './components/PrivacyPolicy/PrivacyPolicyPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreenPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/pmhs" element={<PMHSPage />} />
        <Route path="/contactus" element={<ContactusPage />} />
        <Route path="/cudb" element={<CUDBPage />} />
        <Route path="/evdb" element={<EVDBPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/prc" element={<PRCPage />} />
        <Route path="/passwordreset" element={<PasswordResetPage />} />
        <Route path="/passwordchanged" element={<PasswordChangedPage />} />
        <Route path="/tos" element={<TermsOfServicePage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
      </Routes>
    </Router>
  );
};

export default App;