// ProjectsList.jsx

import React, { useState } from 'react';
import ButtonCreateNew from './ButtonCreateNew';
import ButtonProjectsProgress from './ButtonProjectsProgress';
import ButtonProjectsCompleted from './ButtonProjectsCompleted';
import ButtonProjectsClosed from './ButtonProjectsClosed';
import CardButtonBackground from './CardButtonBackground';
import CardProjects from './CardProjects';
import ButtonProjectsStarted from './ButtonProjectsStarted';

const ProjectsList = (projects ) => {
  const [filter, setFilter] = useState('Started');

  const handleFilterChange = (status) => {
    setFilter(status);
    console.log('filter', filter)
  };

    console.log('ProjectsList: ', projects)
  return (
    <div>
      <CardButtonBackground>
        <ButtonCreateNew />

        <ButtonProjectsStarted onClick={() => handleFilterChange('Started')} />
        <ButtonProjectsProgress onClick={() => handleFilterChange('In Procress')} />
        <ButtonProjectsCompleted onClick={() => handleFilterChange('Completed')} />
        <ButtonProjectsClosed onClick={() => handleFilterChange('Closed')} />
      </CardButtonBackground>
      <CardProjects projects={projects} filter={filter} />
    </div>
  );
};

export default ProjectsList;
