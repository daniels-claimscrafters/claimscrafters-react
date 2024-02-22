// ProjectsList.jsx

import React from 'react';
import ButtonCreateNew from './ButtonCreateNew';
import ButtonProjectsProgress from './ButtonProjectsProgress';
import ButtonProjectsCompleted from './ButtonProjectsCompleted';
import ButtonProjectsClosed from './ButtonProjectsClosed';
import CardButtonBackground from './CardButtonBackground';
import CardProjects from './CardProjects';

const ProjectsList = (projects ) => {
    console.log('ProjectsList: ', projects)
  return (
    <div>
      <CardButtonBackground>
        <ButtonCreateNew />
        <ButtonProjectsProgress />
        <ButtonProjectsCompleted />
        <ButtonProjectsClosed />
      </CardButtonBackground>
      <CardProjects projects={projects} />
    </div>
  );
};

export default ProjectsList;
