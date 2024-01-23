import React from 'react';
import TextHeader from './TextHeader';
import TextBody from './TextBody';
import ImageMain from './ImageMain';
import IconMain from './IconMain';
import ButtonBack from './ButtonBack';

const PasswordResetConfirmationPage = () => {
    return (
      <div style={{ position: 'relative', height: '100vh' }}>
        <div style={{ position: 'absolute', top: 0, left: 0 }}>
           <ImageMain />
          
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <div style={{ textAlign: 'center' }}>
           <IconMain />
           <TextHeader />
           <TextBody />
           <ButtonBack />
          </div>
        </div>
      </div>
    );
  };
  
  export default PasswordResetConfirmationPage;