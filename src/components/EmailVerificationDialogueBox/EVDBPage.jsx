import React from 'react';
import IconExit from './IconExit';
import IconMain from './IconMain';
import TextBody1 from './TextBody1';
import TextBody2 from './TextBody2';
import TextBody3 from './TextBody3';
import TextHeader from './TextHeader';

const EVDBPage = () => {
    return (
      <div style={{ position: 'relative', height: '100vh' }}>
        <div style={{ position: 'absolute', top: 0, left: 0 }}>
          <IconMain />
        </div>
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          <IconExit />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <TextHeader />
            <TextBody1 />
            <TextBody2 />
            <TextBody3 />
          </div>
        </div>
      </div>
    );
  };
  
  export default EVDBPage;