import React from 'react';
import TextHeader from './TextHeader';
import TextEmail from './TextEmail';
import TextBody from './TextBody';
import TextBack from './TextBack';
import InputFieldEmail from './InputFieldEmail';
import ImageMain from './ImageMain';
import IconBack from './IconBack';
import ButtonSend from './ButtonSend';

const ForgotPasswordPage = () => {
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
            <InputFieldEmail />
            <TextBody />
            <ButtonSend />
          </div>
        </div>
      </div>
    );
  };
  

export default ForgotPasswordPage;