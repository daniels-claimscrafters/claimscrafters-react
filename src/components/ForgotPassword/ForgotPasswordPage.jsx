// ForgotPasswordPage.jsx

import React, { useState } from 'react';
import axios from 'axios';
import TextHeader from './TextHeader';
import TextEmail from './TextEmail';
import TextBody from './TextBody';
import TextBack from './TextBack';
import InputFieldEmail from './InputFieldEmail';
import ImageMain from './ImageMain';
import IconBack from './IconBack';
import ButtonSend from './ButtonSend';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://f133-2600-1010-b040-a157-f048-6b47-d705-e729.ngrok-free.app/auth/reset-password-request', {
        email: email,
      });
      setMessage(response.data.message);
      setError('');
      setEmail('');
    } catch (error) {
      setMessage('');
      setError('Failed to send reset password email. Please try again later.');
    }
  };
    return (
      <div style={{ position: 'relative', height: '100vh' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, padding: '10px' }}>
  <ImageMain />
  <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
    <IconBack />
    <TextBack />
  </div>
</div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <TextHeader />
            <TextEmail />
            <InputFieldEmail value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextBody />
            <ButtonSend onClick={handleSendEmail} />
            {message && <div>{message}</div>}
            {error && <div>{error}</div>}
          </div>
        </div>
      </div>
    );
  };
  

export default ForgotPasswordPage;