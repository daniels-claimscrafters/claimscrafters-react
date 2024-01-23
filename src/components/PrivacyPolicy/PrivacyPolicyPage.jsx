// PrivacyPolicyPage.jsx

// Import React
import React from 'react';

// Import Privacy Policy Components
import CardBackground from './CardBackground';
import IconHome from './IconHome';
import Image from './Image';
import ImageLogo from './ImageLogo';
import TextMain from './TextMain';
import TextHeader from './TextHeader';
import TextSubheader from './TextSubheader';

const PrivacyPolicyPage = () => {
  return (
    <div>
      {/* Header Section */}
      <CardBackground>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <ImageLogo />
          <IconHome />
        </div>
      </CardBackground>

      {/* Body Section */}
      <div>
        <TextHeader />
        <TextSubheader />
        <Image />
        <TextMain />
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;