import React, { useState, useEffect } from 'react';
import CardNumberOfLines from './CardNumberOfLines';
import ButtonPay from './ButtonPay';
import CardPriceBreakdown from './CardPriceBreakdown';
import CardPricing from './CardPricing';
import IconHome from './IconHome';
import ImageLogo from './ImageLogo';
import InputFieldCardholderName from './InputFieldCardholderName';
import InputFieldCardNumber from './InputFieldCardNumber';
import InputFieldCVV from './InputFieldCVV';
import InputFieldExpiration from './InputFieldExpiration';
import TextCardholderName from './TextCardholderName';
import TextCardNumber from './TextCardNumber';
import TextCVV from './TextCVV';
import TextExpiration from './TextExpiration';
import TextHeader from './TextHeader';
import TextHeader2 from './TextHeader2';
import TextHeader3 from './TextHeader3';
import TextHeader4 from './TextHeader4';
import TextNumberOfLinesHeader from './TextNumberOfLinesHeader';
import TextNumberOfLinesNum from './TextNumberOfLinesNum';
import TextNumberOfLinesSubheader from './TextNumberOfLinesSubheader';
import TextPricingHeader from './TextPricingHeader';
import TextPricingNum from './TextPricingNum';
import TextPricingSubHeader from './TextPricingSubHeader';
import TextSubheader4 from './TextSubheader4';

const NPC7 = ({ npcData, onInputChange, onPrevious, numberOfLines, onSubmit }) => {
  // Define state variables to hold the total price and credit card information
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardholderName: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
  });

  useEffect(() => {
    // Update npcData with the total price whenever it changes
    onInputChange('price', totalPrice);
  }, [totalPrice]);

  const handleBlur = (name) => {
    // You can implement your validation logic here
    console.log(`Input blurred for field: ${name}`);
    // Implement your validation logic here
  };

  // Define functions to handle input changes for each field
  const handleInputChange = (name, value) => {
    // Update npcData with credit card information
    onInputChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update npcData with credit card information
    onInputChange('cardholderName', creditCardInfo.cardholderName);
    onInputChange('cardNumber', creditCardInfo.cardNumber);
    onInputChange('expiration', creditCardInfo.expiration);
    onInputChange('cvv', creditCardInfo.cvv);
    // Call onSubmit prop to handle form submission in the parent component if needed
    onSubmit && onSubmit();
  };

  // Define a function to calculate the total price based on the number of lines
  const calculateTotalPrice = (numberOfLines) => {
    let totalPrice = 0;
    if (numberOfLines <= 100) {
      totalPrice = 250.00;
    } else if (numberOfLines <= 300) {
      totalPrice = 250.00 + (numberOfLines - 100) * 2.25;
    } else if (numberOfLines <= 500) {
      totalPrice = 250.00 + 200 * 2.25 + (numberOfLines - 300) * 2.00;
    } else if (numberOfLines <= 700) {
      totalPrice = 250.00 + 200 * 2.25 + 200 * 2.00 + (numberOfLines - 500) * 1.75;
    } else if (numberOfLines <= 900) {
      totalPrice = 250.00 + 200 * 2.25 + 200 * 2.00 + 200 * 1.75 + (numberOfLines - 700) * 1.50;
    } else {
      totalPrice = 250.00 + 200 * 2.25 + 200 * 2.00 + 200 * 1.75 + 200 * 1.50 + (numberOfLines - 900) * 1.25;
    }
    return totalPrice.toFixed(2); // Round the total price to 2 decimal places
  };

  // Update the total price whenever the number of lines changes
  useEffect(() => {
    const newTotalPrice = calculateTotalPrice(numberOfLines);
    setTotalPrice(newTotalPrice);
  }, [numberOfLines]); 

  return (
    <div>
      {/* Header Content */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
        <div>
          <ImageLogo />
        </div>
        <div>
          <TextHeader />
        </div>
        <div>
          <IconHome />
        </div>
      </div>

      {/* Two Columns */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center', maxWidth: '80%' }}>
          {/* Left Side Column */}
          <div style={{ flex: 1, marginRight: '10px' }}>
            <TextHeader2 />
            <CardNumberOfLines>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '100%',  }}>
                <div>
                  <TextNumberOfLinesHeader />
                  <TextNumberOfLinesSubheader />
                </div>
                <TextNumberOfLinesNum numberOfLines={npcData.numberOfLines} />
              </div>
            </CardNumberOfLines>
            <CardPricing>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '100%',  }}>
                <div>
                  <TextPricingHeader />
                  <TextPricingSubHeader />
                </div>
                <TextPricingNum totalPrice={totalPrice} />
              </div>
            </CardPricing>
            <CardPriceBreakdown />
          </div>

          {/* Right Side Column */}
          <div style={{ flex: 1, marginLeft: '10px' }}>
            <TextHeader4 />
            <TextSubheader4 />
            <TextCardholderName />
            <InputFieldCardholderName 
  onChange={(name, value) => handleInputChange(name, value)}
/>
            <TextCardNumber />
            <InputFieldCardNumber onChange={(name, value) => handleInputChange(name, value)}/>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <div style={{ marginRight: '10px' }}>
                <TextExpiration />
                <InputFieldExpiration onChange={(name, value) => handleInputChange(name, value)} />
              </div>
              <div>
                <TextCVV />
                <InputFieldCVV onChange={(name, value) => handleInputChange(name, value)} />
              </div>
            </div>
            <ButtonPay totalPrice={totalPrice} onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NPC7;