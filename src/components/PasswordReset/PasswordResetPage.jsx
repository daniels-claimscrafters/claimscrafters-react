//PasswordResetPage.jsx
import React from 'react';
import ButtonSubmit from './ButtonSubmit';
import ImageMain from './ImageMain';
import InputFieldConfirmPassword from './InputFieldConfirmPassword';
import InputFieldNewPassword from './InputFieldNewPassword';
import TextConfirmPassword from './TextConfirmPassword';
import TextHeader from './TextHeader';
import TextNewPassword from './TextNewPassword';
import TextShow from './TextShow';

const PasswordResetPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ margin: '10px' }}>
        <ImageMain />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <TextHeader />
        <TextNewPassword />
        <InputFieldNewPassword>
          <TextShow />
        </InputFieldNewPassword>
        <TextConfirmPassword />
        <InputFieldConfirmPassword>
          <TextShow />
        </InputFieldConfirmPassword>
        <ButtonSubmit />
      </div>
    </div>
  );
};
  
export default PasswordResetPage;