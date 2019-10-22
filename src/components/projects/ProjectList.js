import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list section">
            {
                projects && projects.map(prj => (
                        <ProjectSummary 
                            project={ prj }
                            key={ prj.id }
                        />
                    )
                )
            }
        </div>
    );
}

export default ProjectList;