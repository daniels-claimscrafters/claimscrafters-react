// npc6.jsx
import React, { useState } from 'react';
import CardCircle from './CardCircle';
import HorizontalDivider from './HorizontalDivider';
import IconHome from './IconHome';
import ImageLogo from './ImageLogo';
import Text1 from './Text1';
import Text2 from './Text2';
import Text3 from './Text3';
import Text4 from './Text4';
import Text5 from './Text5';
import Text6 from './Text6';
import TextAdditional from './TextAdditional';
import TextFinancialInputs from './TextFinancialInputs';
import TextHeader from './TextHeader';
import TextInsuredInformation from './TextInsuredInformation';
import TextLossDetails from './TextLossDetails';
import TextPayment from './TextPayment';
import TextProvidePersonal from './TextProvidePersonal';
import ButtonContinue from './ButtonContinue';
import ButtonBack from './ButtonBack';
import Checkbox from './Checkbox';
import InputFieldFullName from './InputFieldFullName';
import TextBody from './TextBody';
import TextCheckbox from './TextCheckbox';
import TextHeader2 from './TextHeader2';
import TextSubtitle from './TextSubtitle';


const NPC6 = ({ npcData, onInputChange, onNext, onPrevious }) => {
  const [didAcceptLegal, setDidAcceptLegal] = useState(false);
  const [acceptLegalFullName, setAcceptLegalFullName] = useState('');
  const [isInputFieldPopulated, setIsInputFieldPopulated] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);


  const handleCheckboxChange = (isChecked, event) => {
    setDidAcceptLegal(isChecked);
    setIsCheckboxChecked(isChecked);
    // Update npcData directly in NPC6
    onInputChange('didAcceptLegal', isChecked);
  };
  
  
  const handleFullNameChange = (newValue) => {
    // Check if newValue has at least two characters
    if (newValue.length >= 2) {
      setAcceptLegalFullName(newValue);
      setIsInputFieldPopulated(true); // If newValue has at least two characters, set to true
      onInputChange('acceptLegalFullName', newValue);
    } else {
      setAcceptLegalFullName(newValue);
      setIsInputFieldPopulated(false); // If newValue has less than two characters, set to false
      // Optionally, you can clear the input field or show an error message here
      // You can add your logic here depending on your requirements
    }
  };

  const isContinueDisabled = !(isInputFieldPopulated && isCheckboxChecked);


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      {/* Row 1 */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ImageLogo />
          <div style={{ marginLeft: '10px' }}>
            <TextHeader />
          </div>
        </div>
        <div style={{ alignSelf: 'flex-start', marginTop: '10px' }}>
          <IconHome />
        </div>
      </div>

      {/* Row 2 Centered */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '20px' }}>
        {/* Assuming CardCircle, HorizontalDivider, Text1, Text2, ..., Text6 components */}
      </div>

      {/* Row 3 Centered */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '20px' }}>
        {/* TextHeader2 */}
        <TextHeader2 />
        {/* TextSubtitle */}
        <TextSubtitle />
        {/* TextBody */}
        <TextBody />
      </div>

      {/* Row 4 Centered */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '20px' }}>
        <Checkbox checked={didAcceptLegal} onChange={handleCheckboxChange} />
          <TextCheckbox />
        </div>
        <InputFieldFullName 
  value={acceptLegalFullName} 
  onChange={handleFullNameChange} // Pass the onChange handler
/>
      </div>

      {/* Row 5 Centered */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '20px' }}>
        <div style={{ marginRight: '10px' }}>
          <ButtonBack onClick={onPrevious} />
        </div>
        <div style={{ marginLeft: '10px' }}>
        <ButtonContinue disabled={isContinueDisabled} label="Continue" onClick={onNext} />
        </div>
      </div>
    </div>
  );
};

export default NPC6;