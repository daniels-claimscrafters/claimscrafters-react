
import IconMain from './IconMain';
import TextBody from './TextBody';
import TextHeader from './TextHeader';
import IconExit from './IconExit';

const CUDBPage = () => {
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
            <TextBody />
          </div>
        </div>
      </div>
    );
  };  
  
  export default CUDBPage;