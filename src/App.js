//App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreenPage from './components/HomeScreen/HomeScreenPage';
import LoginPage from './components/LogIn/LoginPage';
import SignupPage from './components/SignUp/SignupPage';
import PMHSPage from './components/ProjectManagementHomeScreen/PMHSPage';
import ContactusPage from './components/ContactUs/ContactUsPage';
import CUDBPage from './components/ContactUsDialogueBox/CUDBPage';
import EVDBPage from './components/EmailVerificationDialogueBox/EVDBPage';
import ForgotPasswordPage from './components/ForgotPassword/ForgotPasswordPage';
import PRCPage from './components/PasswordResetConfirmation/PRCPage';
import PasswordResetPage from './components/PasswordReset/PasswordResetPage';
import PasswordChangedPage from './components/PasswordChanged/PasswordChangedPage';
import TermsOfServicePage from './components/TermsOfService/TermsOfServicePage';
import PrivacyPolicyPage from './components/PrivacyPolicy/PrivacyPolicyPage';
import NPC1 from './components/NewProjectCreation1/NPC1';
import NPC2 from './components/NewProjectCreation2/NPC2';
import NPC3 from './components/NewProjectCreation3/NPC3';
import NPC4 from './components/NewProjectCreation4/NPC4';
import NPC5 from './components/NewProjectCreation5/NPC5';
import NPC6 from './components/NewProjectCreation6/NPC6';

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
        <Route path="/npc1" element={<NPC1 />} />
        <Route path="/npc2" element={<NPC2 />} />
        <Route path="/npc3" element={<NPC3 />} />
        <Route path="/npc4" element={<NPC4 />} />
        <Route path="/npc5" element={<NPC5 />} />
        <Route path="/npc6" element={<NPC6 />} />
      </Routes>
    </Router>
  );
};

export default App;