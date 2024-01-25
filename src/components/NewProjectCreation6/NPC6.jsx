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

const NPC6 = () => {
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
        <CardCircle>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <Text1 style={{ margin: 0 }}>1</Text1>
          </div>
        </CardCircle>
        <HorizontalDivider />
        <CardCircle>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <Text2 style={{ margin: 0 }}>2</Text2>
          </div>
        </CardCircle>
        <HorizontalDivider />
        <CardCircle>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <Text3 style={{ margin: 0 }}>3</Text3>
          </div>
        </CardCircle>
        <HorizontalDivider />
        <CardCircle>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <Text4 style={{ margin: 0 }}>4</Text4>
          </div>
        </CardCircle>
        <HorizontalDivider />
        <CardCircle>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <Text5 style={{ margin: 0 }}>5</Text5>
          </div>
        </CardCircle>
        <HorizontalDivider />
        <CardCircle>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <Text6 style={{ margin: 0 }}>6</Text6>
          </div>
        </CardCircle>
        <HorizontalDivider />
      </div>
    </div>
  );
};
  
export default NPC6;