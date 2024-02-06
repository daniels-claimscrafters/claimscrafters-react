import React from 'react';
import ButtonContinue from './ButtonContinue';
import CardCircle from './CardCircle';
import DropdownLossState from './DropdownLossState';
import HorizontalDivider from './HorizontalDivider';
import IconHome from './IconHome';
import ImageLogo from './ImageLogo';
import InputFieldClaimNumber from './InputFieldClaimNumber';
import InputFieldDateofLoss from './InputFieldDateofLoss';
import InputFieldFirstName from './InputFieldFirstName';
import InputFieldLastName from './InputFieldLastName';
import InputFieldLossAddress from './InputFieldLossAddress';
import InputFieldLossCity from './InputFieldLossCity';
import InputFieldLossPostalCode from './InputFieldLossPostalCode';
import Text1 from './Text1';
import Text2 from './Text2';
import Text3 from './Text3';
import Text4 from './Text4';
import Text5 from './Text5';
import Text6 from './Text6';
import TextAdditional from './TextAdditional';
import TextClaimNumber from './TextClaimNumber';
import TextDateOfLoss from './TextDateOfLoss';
import TextFinancialInputs from './TextFinancialInputs';
import TextHeader from './TextHeader';
import TextHeader2 from './TextHeader2';
import TextInsuredFirstName from './TextInsuredFirstName';
import TextInsuredInformation from './TextInsuredInformation';
import TextInsuredLastName from './TextInsuredLastName';
import TextLossAddress from './TextLossAddress';
import TextLossCity from './TextLossCity';
import TextLossDetails from './TextLossDetails';
import TextLossPostalCode from './TextLossPostalCode';
import TextLossState from './TextLossState';
import TextPayment from './TextPayment';
import TextProvidePersonal from './TextProvidePersonal';
import TextSubheader from './TextSubheader';
import ImageFooterLogo from './ImageFooterLogo';
import CardFooterBackground from './CardFooterBackground';

const NPC1 = (props) => {
  const { npcData, onInputChange, onNext } = props;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        {/* Row 1 */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Assuming ImageLogo, TextHeader, and other components */}
            <ImageLogo />
            <div style={{ marginLeft: '10px' }}>
              <TextHeader />
              {/* Other components go here */}
            </div>
          </div>
          <div style={{ alignSelf: 'flex-start', marginTop: '10px' }}>
            <IconHome />
          </div>
        </div>
  
    {/* Row 2 Centered */}
<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '20px' }}>
  <HorizontalDivider />

  {/* Card Circle 1 */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <CardCircle>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
        <Text1 style={{ margin: 0 }}>1</Text1>
      </div>
    </CardCircle>
    <TextInsuredInformation />
  </div>

  <HorizontalDivider />

  {/* Card Circle 2 */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <CardCircle>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
        <Text2 style={{ margin: 0 }}>2</Text2>
      </div>
    </CardCircle>
    <TextLossDetails />
  </div>

  <HorizontalDivider />

  {/* Card Circle 3 */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <CardCircle>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
        <Text3 style={{ margin: 0 }}>3</Text3>
      </div>
    </CardCircle>
    <TextFinancialInputs />
  </div>

  <HorizontalDivider />

  {/* Card Circle 4 */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <CardCircle>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
        <Text4 style={{ margin: 0 }}>4</Text4>
      </div>
    </CardCircle>
    <TextProvidePersonal />
  </div>

  <HorizontalDivider />

  {/* Card Circle 5 */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <CardCircle>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
        <Text5 style={{ margin: 0 }}>5</Text5>
      </div>
    </CardCircle>
    <TextAdditional />
  </div>

  <HorizontalDivider />

  {/* Card Circle 6 */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <CardCircle>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
        <Text6 style={{ margin: 0 }}>6</Text6>
      </div>
    </CardCircle>
    <TextPayment />
  </div>

  <HorizontalDivider />
</div>

{/* New Section with TextHeader2 and TextSubtitle */}
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px', marginBottom: '20px' }}>
  <TextHeader2 />
  <TextSubheader />
</div>


      {/* Financial Inputs Section */}
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
        <div style={{ marginRight: '20px' }}>
          <TextClaimNumber />
          <InputFieldClaimNumber
            value={npcData.claimNumber}
            onChange={onInputChange}
          />
        </div>
        <div>
          <TextDateOfLoss />
          <InputFieldDateofLoss
          value={npcData.dateOfLoss}
          onChange={onInputChange}
          />
        </div>
      </div>

      {/* Insured Information Section */}
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
        <div style={{ marginRight: '20px' }}>
          <TextInsuredFirstName />
          <InputFieldFirstName 
          value={npcData.insuredFirstName}
          onChange={onInputChange}
          />
        </div>
        <div>
          <TextInsuredLastName />
          <InputFieldLastName 
          value={npcData.insuredLastName}
          onChange={onInputChange}/>
        </div>
      </div>

      {/* Loss Information Section */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '20px' }}>
          <TextLossAddress />
          <InputFieldLossAddress 
          value={npcData.lossAddress}
          onChange={onInputChange}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ marginRight: '20px' }}>
            <TextLossCity />
            <InputFieldLossCity 
            value={npcData.lossCity}
            onChange={onInputChange}
            />
          </div>
          <div>
            <TextLossState />
            <DropdownLossState 
            value={npcData.lossState}
            onChange={onInputChange}
            />
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <TextLossPostalCode />
          <InputFieldLossPostalCode 
          value={npcData.lossPostalCode}
          onChange={onInputChange}
          />
        </div>
      </div>

      {/* Additional Information Section */}
      <div>
        <ButtonContinue label="Continue" onClick={onNext} />
      </div>
      {/* Footer Section */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '20px', width: '100%' }}>
        <CardFooterBackground >
          <ImageFooterLogo />
        </CardFooterBackground>
      </div>
    </div>
  );
};
  
export default NPC1;