import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Poppins',
    fontWeight: 400,
    lineHeight: '19px',
    textAlign: 'justify',
    maxWidth: '66%',
  },
};

const defaultProps = {
  text: `A Message from Legal

·       I understand the content valuation provided to me is solely for the purposes of fair market evaluation. It is intended to assess the approximate value of the content based on prevailing market conditions, industry standards, locales and relevant data available at the time of evaluation.
 
·       I acknowledge that this content valuation is not an endorsement of any claims and or settlements made within the content, nor does it validate or invalidate any assertions, statements, or representations contained therein. Insurance Carriers and policies vary and may result in differences between the Claims Crafters pricing output which could impact the final claim settlement.
 
·       I am aware that this content valuation does not constitute a resolution nor closure of any claims, disputes, or legal matters related to the content. It is not a substitute for any legal or professional advice that may be required to address such issues.
 
·       I understand that the valuation provided is subject to change over time due to shifts in market dynamics, demand, and other factors, and it may not reflect the content’s current value at a later date. I release and hold harmless Claims Crafters and/or Claims Crafters representatives providing this content valuation from any liabilities, claims, or actions arising from the use or reliance upon this valuation report.
 
By submitting your information, you’re giving Claims Crafters permission to email you. You may unsubscribe at any time.
 
I have reviewed the terms and conditions as stated above. `










};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;