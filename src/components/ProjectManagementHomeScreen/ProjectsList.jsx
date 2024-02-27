// ProjectsList.jsx

import React, { useState } from 'react';
import ButtonCreateNew from './ButtonCreateNew';
import ButtonProjectsProgress from './ButtonProjectsProgress';
import ButtonProjectsCompleted from './ButtonProjectsCompleted';
import ButtonProjectsClosed from './ButtonProjectsClosed';
import CardButtonBackground from './CardButtonBackground';
import CardProjects from './CardProjects';

const ProjectsList = (projects ) => {
  const [filter, setFilter] = useState('Started');

  const handleFilterChange = (status) => {
    setFilter(status);
    console.log(filter)
  };

    console.log('ProjectsList: ', projects)
  return (
    <div>
      <CardButtonBackground>
        <ButtonCreateNew />
        <ButtonProjectsProgress onClick={() => handleFilterChange('In Progress')} />
        <ButtonProjectsCompleted onClick={() => handleFilterChange('Complete')} />
        <ButtonProjectsClosed onClick={() => handleFilterChange('Closed')} />
      </CardButtonBackground>
      <CardProjects projects={projects} filter={filter} />
    </div>
  );
};

export default ProjectsList;
