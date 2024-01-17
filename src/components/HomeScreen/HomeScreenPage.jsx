// HomeScreen.jsx
import React from 'react';
import ButtonSignIn from './ButtonSignIn';
import ButtonTheChallenge from './ButtonTheChallenge';
import ButtonTheOpportunity from './ButtonTheOpportunity';
import ButtonTheSolution from './ButtonTheSolution';
import Card from './Card';
import CardBackground from './CardBackground';
import CardBackgroundHeader from './CardBackgroundHeader';
import CardFooter from './CardFooter';
import CardText from './CardText';
import Circle1 from './Circle1';
import Circle2 from './Circle2';
import Circle3 from './Circle3';
import Header from './Header';
import HeaderText from './HeaderText';
import IconCircle1 from './IconCircle1';
import IconCircle2 from './IconCircle2';
import IconCircle3 from './IconCircle3';
import IconFooterContactus from './IconFooterContactUs';
import ImageJumbotron from './ImageJumbotron';
import ImageLogo from './ImageLogo';
import ImageLogoFooter from './ImageLogoFooter';
import TextCircle1Body from './TextCircle1Body';
import TextCircle1Header from './TextCircle1Header';
import TextCircle2Body from './TextCircle2Body';
import TextCircle2Header from './TextCircle2Header';
import TextCircle3Body from './TextCircle3Body';
import TextCircle3Header from './TextCircle3Header';
import TextFooterContactUs from './TextFooterContactUs';
import TextFooterPrivacyPolicy from './TextFooterPrivacyPolicy';
import TextFooterTermsOfUse from './TextFooterTermsOfUse';
import TextGetStarted from './TextGetStarted';
import TextMainBody from './TextMainBody';
import TextMainHeader from './TextMainHeader';
import TextTheChallengeBody from './TextTheChallengeBody';
import TextTheChallengeHeader from './TextTheChallengeHeader';
import TextTheOpportunityBody from './TextTheOpportunityBody';
import TextTheOpportunityHeader from './TextTheOpportunityHeader';
import TextTheSolutionBody from './TextTheSolutionBody';
import TextTheSolutionHeader from './TextTheSolutionHeader';
import VerticalDividerFooter from './VerticalDividerFooter';

// Import other components as needed

const HomeScreen = () => {
  
  return (
    <div className="home-screen-page">
      <Header>
        {/* Logo on the left */}
        <ImageLogo />

        {/* Header text in the middle */}
        <HeaderText />

        {/* Sign In text and Login button on the right */}
        <TextGetStarted />
        <ButtonSignIn />
      </Header>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ flexShrink: 0, marginRight: '20px' }}>
          <ImageJumbotron />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TextMainHeader />
          <TextMainBody />
        </div>
      </div>
      
      <Card>
        <CardText />
      </Card>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* First Column */}
        <div>
          <ButtonTheChallenge />
          <TextTheChallengeHeader />
          <TextTheChallengeBody />
        </div>

        {/* Second Column */}
        <div>
          <ButtonTheOpportunity />
          <TextTheOpportunityHeader />
          <TextTheOpportunityBody />
        </div>

        {/* Third Column */}
        <div>
          <ButtonTheSolution />
          <TextTheSolutionHeader />
          <TextTheSolutionBody />
        </div>
      </div>

    <div>
      <CardBackground>
        <CardBackgroundHeader />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* First Column */}
          <div>
            <Circle1>
              <IconCircle1 />
            </Circle1>
            <TextCircle1Header />
            <TextCircle1Body />
          </div>

          {/* Second Column */}
          <div>
            <Circle2>
              <IconCircle2 />
            </Circle2>
            <TextCircle2Header />
            <TextCircle2Body />
          </div>

          {/* Third Column */}
          <div>
            <Circle3>
              <IconCircle3 />
            </Circle3>
            <TextCircle3Header />
            <TextCircle3Body />
          </div>
        </div>
      </CardBackground>
    </div>

    <CardFooter>
      <ImageLogoFooter />

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TextFooterContactUs />
        <IconFooterContactus />
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TextFooterTermsOfUse />
        <VerticalDividerFooter />
        <TextFooterPrivacyPolicy />
      </div>
    </CardFooter>
  </div>
  );
};

export default HomeScreen;