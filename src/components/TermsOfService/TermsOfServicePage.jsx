// TermsOfServicePage.jsx

import React from 'react';
import HeaderBackground from './HeaderBackground';
import IconHome from './IconHome';
import ImageLogo from './ImageLogo';
import TextBody from './TextBody';
import TextHeader from './TextHeader';
import { motion } from "framer-motion";

const TermsOfServicePage = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Header Section */}
      <HeaderBackground>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div
          initial={{ scale: 0 }} // Initial scale is 0
          animate={{ scale: 1 }} // Animate to scale 1
          transition={{ duration: 1.0 }} // Transition duration
        ><ImageLogo /></motion.div>
          <motion.div
          initial={{ scale: 0 }} // Initial scale is 0
          animate={{ scale: 1 }} // Animate to scale 1
          whileHover={{ scale: 1.1 }} // Scale up to 1.1 when hovered
          transition={{ duration: 1.0 }} // Transition duration
        ><IconHome /></motion.div>
        </div>
      </HeaderBackground>
  
        {/* Body Section */}
        <div style={{ padding: '10px'}}>
          <TextHeader />
          <TextBody />
        </div>
      </div>
    );
  };
  
  export default TermsOfServicePage;