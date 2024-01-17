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
      <ButtonSendMessage />
      <ButtonSignUp />
      <CardFooterBackground />
      <Header />
      <ImageCaptcha />
      <ImageFooterLogo />
      <ImageLogo />
      <TextMainHeader />
      <ImageJumbotron />
      <TextMainBody />
      <InputFieldName />
      <TextNameField />
      <InputFieldEmail />
      <TextEmailField />
      <InputFieldMessage />
      <TextMessageField />
      <TextSignIn />
      <TextPrivacyPolicy />
      <TextTermsOfUse />
      <VerticalDividerFooter />
    </div>
  );
};

export default ContactUsPage;