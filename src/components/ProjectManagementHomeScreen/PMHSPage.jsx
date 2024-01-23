import TextUsername from './TextUsername';
import TextTotalInt from './TextTotalInt';
import TextTotal from './TextTotal';
import TextSubtitle from './TextSubtitle';
import TextMyProjects from './TextMyProjects';
import TextInProcessInt from './TextInProcessInt';
import TextInProcess from './TextInProcess';
import TextHeader from './TextHeader';
import TextCompletedInt from './TextCompletedInt';
import TextCompleted from './TextCompleted';
import InputFieldSearch from './InputFieldSearch';
import ImageProfile from './ImageProfile';
import IconTotal from './IconTotal';
import IconSearch from './IconSearch';
import IconHome from './IconHome';
import IconCompleted from './IconCompleted';
import IconInProcess from './IconInProgress';
import CardTotalSubcard from './CardTotalSubcard';
import CardTotal from './CardTotal';
import CardSideBar from './CardSideBar';
import CardInProcessSubcard from './CardInProcessSubcard';
import CardInProcess from './CardInProcess';
import CardCompletedSubcard from './CardCompletedSubcard';
import CardCompleted from './CardCompleted';
import CardButtonBackground from './CardButtonBackground';
import ButtonCreateNew from './ButtonCreateNew';
import ButtonProjectsClosed from './ButtonProjectsClosed';
import ButtonProjectsCompleted from './ButtonProjectsCompleted';
import ButtonProjectsProgress from './ButtonProjectsProgress';

const PMHSPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', height: '100%' }}>
      {/* Sidebar */}
      <CardSideBar>
        <IconHome />
      </CardSideBar>

      {/* Main Content */}
      <div style={{ marginLeft: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        {/* Top Row */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          {/* Left Section: TextHeader and TextSubtitle */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <TextHeader />
              {/* Add any other components you want to place to the right */}
            </div>
            
            {/* Subtitle Section */}
            <div>
              <TextSubtitle />
            </div>
          </div>

          {/* Middle Section: Search Bar */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <InputFieldSearch />
            <IconSearch />
            {/* Include the search icon within InputFieldSearch component */}
          </div>

          {/* Right Section: ImageProfile and TextUsername */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            {/* ImageProfile in the top-right corner */}
            <ImageProfile />

            {/* TextUsername directly under ImageProfile */}
            <TextUsername />
          </div>
        </div>

        {/* Cards and Project Buttons Section */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          {/* Left Section: Cards */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <CardInProcess>
              <CardInProcessSubcard>
                <IconInProcess />
              </CardInProcessSubcard>
              <TextInProcess />
              <TextInProcessInt />
            </CardInProcess>

            <CardCompleted>
              <CardCompletedSubcard>
                <IconCompleted />
              </CardCompletedSubcard>
              <TextCompleted />
              <TextCompletedInt />
            </CardCompleted>
            
            <CardTotal>
              <CardTotalSubcard>
                <IconTotal />
              </CardTotalSubcard> 
              <TextTotal />
              <TextTotalInt />
            </CardTotal>
          </div>

          {/* Right Section: Project Buttons */}
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <TextMyProjects />
    <CardButtonBackground>
      <ButtonCreateNew />
      <ButtonProjectsClosed />
      <ButtonProjectsCompleted />
      <ButtonProjectsProgress />
    </CardButtonBackground>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default PMHSPage;

