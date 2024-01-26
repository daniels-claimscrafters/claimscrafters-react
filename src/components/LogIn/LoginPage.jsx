// LoginPage.jsx
import React from 'react';
import ButtonLogIn from './ButtonLogIn';
import Checkbox from './Checkbox';
import IconEmail from './IconEmail';
import IconFacebook from './IconFacebook';
import IconGoogle from './IconGoogle';
import IconLinkedin from './IconLinkedin';
import IconPassword from './IconPassword';
import IconWindows from './IconWindows';
import ImageHeader from './ImageHeader';
import ImageJumbotron from './ImageJumbotron';
import InputFieldEmail from './InputFieldEmail';
import InputFieldPassword from './InputFieldPassword';
import TextEmailField from './TextEmailField';
import TextForgotPassword from './TextForgotPassword';
import TextIDHAA from './TextIDHAA';
import TextOr from './TextOr';
import TextPasswordField from './TextPasswordField';
import TextRememberMe from './TextRememberMe';
import TextSignup from './TextSignup';
import TextSubtitle from './TextSubtitle';
import TextTitle from './TextTitle';

// Import other components as needed

const LogInPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <ImageJumbotron />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginLeft: '20px', textAlign: 'center' }}>
          <ImageHeader />
          <TextTitle />
          <TextSubtitle />
          <div style={{ marginBottom: '10px' }}>
            <div>
              <TextEmailField />
              <InputFieldEmail>
                <IconEmail style={{ marginLeft: '10px' }} />
              </InputFieldEmail>
            </div>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <div>
              <TextPasswordField />
              <InputFieldPassword>
                <IconPassword style={{ marginLeft: '10px' }} />
              </InputFieldPassword>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <TextRememberMe />
    <Checkbox />
  </div>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <TextForgotPassword style={{ marginLeft: 'auto' }} />
  </div>
</div>
          <ButtonLogIn />
          <TextOr />
          <div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px' }}>
  <IconGoogle />
  <IconWindows />
  <IconLinkedin />
  <IconFacebook />
</div>
        </div>
        <div style={{ marginLeft: '20px', display: 'flex' }}>
          <TextIDHAA />
          <TextSignup />
        </div>
      </div>
    </div>
  );
};

export default LogInPage;