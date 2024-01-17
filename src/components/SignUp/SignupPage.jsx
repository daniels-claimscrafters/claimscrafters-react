import ButtonFacebook from './ButtonFacebook';
import ButtonGoogle from './ButtonGoogle';
import ButtonLinkedIn from './ButtonLinkedIn';
import ButtonSignup from './ButtonSignup';
import ButtonWindows from './ButtonWindows';
import Checkbox from './Checkbox';
import IconCAP from './IconCAP';
import IconCompany from './IconCompany';
import IconCP from './IconCP';
import IconEmail from './IconEmail';
import IconFirstName from './IconFirstName';
import IconLastName from './IconLastName';
import IconTitle from './IconTitle';
import IconPhone from './IconPhone';
import ImageLogo from './ImageLogo';
import InputFieldCAP from './InputFieldCAP';
import InputFieldCompany from './InputFieldCompany';
import InputFieldCP from './InputFieldCP';
import InputFieldEmail from './InputFieldEmail';
import InputFieldFirstName from './InputFieldFirstName';
import InputFieldLastName from './InputFieldLastName';
import InputFieldPhone from './InputFieldPhone';
import InputFieldTitle from './InputFieldTitle';
import TextAlreadyHave from './TextAlreadyHave';
import TextAnd from './TextAnd';
import TextBySigning from './TextBySigning';
import TextCompany from './TextCompany';
import TextConfirmPassword from './TextConfirmPassword';
import TextCreateAPassword from './TextCreateAPassword';
import TextEmail from './TextEmail';
import TextFullName from './TextFullName';
import TextHeader from './TextHeader';
import TextLastName from './TextLastName';
import TextLogIn from './TextLogIn';
import TextPhone from './TextPhone';
import TextPrivacy from './TextPrivacy';
import TextSubtitle from './TextSubtitle';
import TextTitle from './TextTitle';
import TextTOU from './TextTOU';

const YourTargetComponent = () => {
    return (
      <div>
        <div>
        {/* Header */}
        <TextHeader />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {/* Social Media Buttons in a line with reduced gap */}
        <ButtonGoogle />
        <ButtonWindows />
        <ButtonLinkedIn />
        <ButtonFacebook />
      </div>

      <div>
        {/* Subtitle */}
        <TextSubtitle />
      </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {/* Left Column */}
        <div>
          <div>
            {/* Full Name */}
            <IconFirstName />
            <TextFullName />
            <InputFieldFirstName />
          </div>
          <div>
            {/* Title */}
            <IconTitle />
            <TextTitle />
            <InputFieldTitle />
          </div>
          <div>
            {/* Phone */}
            <IconPhone />
            <TextPhone />
            <InputFieldPhone />
          </div>
          <div>
            {/* Image Logo */}
            <ImageLogo />
          </div>
        </div>

        {/* Right Column */}
        <div>
          <div>
            {/* Last Name */}
            <IconLastName />
            <TextLastName />
            <InputFieldLastName />
          </div>
          <div>
            {/* Company */}
            <IconCompany />
            <TextCompany />
            <InputFieldCompany />
          </div>
          <div>
            {/* Email */}
            <IconEmail />
            <TextEmail />
            <InputFieldEmail />
          </div>
          <div>
            {/* Create a Password */}
            <TextCreateAPassword />
            <InputFieldCAP />
          </div>
          <div>
            {/* Confirm Password */}
            <TextConfirmPassword />
            <InputFieldCP />
          </div>
          <div>
  {/* Checkbox, Text By Signing, Text TOS, Text And, Text Privacy */}
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Checkbox />
    <TextBySigning />
    <TextTOU />
    <TextAnd />
    <TextPrivacy />
  </div>
</div>
          <div>
            {/* Button Signup */}
            <ButtonSignup />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Text Already Have */}
            <TextAlreadyHave />
            <TextLogIn />
          </div>
        </div>
 </div>
      {/* Rest of your component code */}
    </div>
    );
  };
  
  export default YourTargetComponent;