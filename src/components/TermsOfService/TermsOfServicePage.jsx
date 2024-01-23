// TermsOfServicePage.jsx

import React from 'react';
import HeaderBackground from './HeaderBackground';
import IconHome from './IconHome';
import ImageLogo from './ImageLogo';
import TextBody from './TextBody';
import TextHeader from './TextHeader';

const TermsOfServicePage = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Header Section */}
      <HeaderBackground>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <ImageLogo />
          <IconHome />
        </div>
      </HeaderBackground>
  
        {/* Body Section */}
        <div>
          <TextHeader />
          <TextBody />
        </div>
      </div>
    );
  };
  
  export default TermsOfServicePage;