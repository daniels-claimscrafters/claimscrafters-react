// ContactUsPage.jsx
import React from 'react';
import ButtonSendMessage from './ButtonSendMessage';
import ButtonSignUp from './ButtonSignUp';
import CardFooterBackground from './CardFooterBackground';
import Header from './Header';
import ImageCaptcha from './ImageCaptcha';
import ImageFooterLogo from './ImageFooterLogo';
import ImageJumbotron from './ImageJumbotron';
import ImageLogo from './ImageLogo';
import InputFieldEmail from './InputFieldEmail';
import InputFieldMessage from './InputFieldMessage';
import InputFieldName from './InputFieldName';
import TextEmailField from './TextEmailField';
import TextMainBody from './TextMainBody';
import TextMainHeader from './TextMainHeader';
import TextMessageField from './TextMessageField';
import TextNameField from './TextNameField';
import TextPrivacyPolicy from './TextPrivacyPolicy';
import TextSignIn from './TextSignIn';
import TextTermsOfUse from './TextTermsOfUse';
import VerticalDividerFooter from './VerticalDividerFooter';

// Import other components as needed

const ContactUsPage = () => {
  return (
    <div>
      <Header>
        {/* Header content */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ImageLogo />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextSignIn style={{ marginRight: '10px' }} />
            <ButtonSignUp />
          </div>
        </div>
      </Header>

      {/* Two columns under Header */}
      <div style={{ display: 'flex' }}>
        {/* Left column with ImageJumbotron */}
        <div style={{ flex: 1 }}>
          <ImageJumbotron />
        </div>

        {/* Right column with other elements */}
<div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
  <TextMainHeader />
  <TextMainBody />

  <TextNameField />
  <InputFieldName />
  
  <TextEmailField />
  <InputFieldEmail />

  <TextMessageField />
  <InputFieldMessage />

  <ImageCaptcha />
  <ButtonSendMessage />
</div>
      </div>

      {/* Elements under two columns and nested inside CardFooterBackground */}
      <CardFooterBackground>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <ImageFooterLogo />
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <TextTermsOfUse />
      <VerticalDividerFooter />
      <TextPrivacyPolicy />
    </div>
  </div>
</CardFooterBackground>
    </div>
  );
};

export default ContactUsPage;