import React from 'react';

const ProjectDetail = (props) => {
    const id = props.match.params.id;
    
    return (
        <div>
            <div className="container section project-details">

                <div className="card z-depth-0">
                    <div className="card-content">
                        <h3 className="card-title">Project Title</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad laboriosam nihil velit maxime qui aliquam veniam optio enim voluptatum reiciendis ducimus ipsa, laudantium soluta quos, officiis minima cumque ea molestiae!</p>
                    </div>

                    <div className="card-action green lighten-4 grey-text">
                        <div>Posted by The Net Ninja</div>
                        <div>2nd September, 2am</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProjectDetail;
