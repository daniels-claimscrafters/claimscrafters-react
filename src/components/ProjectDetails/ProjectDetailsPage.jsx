// ProjectDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import TextHeader from './TextHeader';
import ImageProfile from './ImageProfile';
import ImageHeader from './ImageHeader';
import CardChangelog from './CardChangelog';
import HeaderBackground from './HeaderBackground';
import CardValuation from './CardValuation';
import CardDetails from './CardDetails';
import CardContents from './CardContents';

const ProjectDetailsPage = () => {
    const [projectDetails, setProjectDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch project details from the server
        fetch('https://f133-2600-1010-b040-a157-f048-6b47-d705-e729.ngrok-free.app/npc/project/details', {
            headers: {
                'ngrok-skip-browser-warning': '69420'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Received project details:', data);
            setProjectDetails(data);
            setIsLoading(false); // Update loading state when data is fetched
        })
        .catch(error => {
            console.error('Error fetching project details:', error);
            setIsLoading(false); // Update loading state even on error
        });
    }, []); // Run only once on component mount

    const handleUpdateProjectDetails = (updatedDetails) => {
        setProjectDetails(updatedDetails);
    };
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!projectDetails) {
        return <div>Error: Unable to fetch project details</div>;
    }
    

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <HeaderBackground>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <ImageHeader />
                    <TextHeader />
                    <ImageProfile />
                </div>
            </HeaderBackground>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ flex: 1, padding: '10px' }}>
                    {/* Pass projectDetails as props to CardDetails */}
                    <CardDetails projectDetails={projectDetails} />
                    {/* Pass projectDetails as props to CardValuation */}
                    <CardValuation projectDetails={projectDetails} />
                </div>
                <div style={{ padding: '10px' }}>
                    <CardChangelog />
                </div>
            </div>
            <div style={{ display: 'flex', padding: '10px' }}>
                {/* Pass projectDetails as props to CardContents */}
                <CardContents 
                    projectDetails={projectDetails} 
                    setProjectDetails={handleUpdateProjectDetails}
                />
            </div>
        </div>
    );
};
  
  export default ProjectDetailsPage;