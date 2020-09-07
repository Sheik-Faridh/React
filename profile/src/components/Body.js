import React from 'react';

function buildContactDetails(contact){
    const contact_view = [];
    for(let prop in contact){
        if(Object.prototype.hasOwnProperty.call(contact,prop)){
            contact_view.push(<div key={prop} className="contact-data">
                                <span className="uppercase">{prop}</span>
                                <p>{contact[prop]}</p>
                            </div>);
        }
    }
    return contact_view;
}

function buildSkillDetails(skills){
    const skills_view = [];
    for(let prop in skills){
        if(Object.prototype.hasOwnProperty.call(skills,prop)){
            const skill = Array.from({length: 5}, (_,i) => <span key={i} className={ i+1 <= Number(skills[prop]) ? 'fa fa-star checked' : 'fa fa-star'}></span>)
            skills_view.push(<div key={prop} className="skill-data">
                                <span className="uppercase">{prop}</span>
                                <p className="ratings">{skill}</p>
                            </div>);
        }
    }
    return skills_view; 
}

function buildCertificationDetails(certificates){
    return certificates.map((certificate,i) => <li key={i}>{certificate.name}<span className="issued-at">({certificate.issued_date})</span></li>)
}

function buildTechnologyDetails(technology){
    return technology.map((stack,i) => <li key={i}>{stack}</li>)
}

function getFormatedDate(date){
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${new Date(date).getFullYear()} ${monthNames[new Date(date).getMonth()]}`;
}

function getDurations(experience_data){
    return experience_data.current_working ? `${getFormatedDate(experience_data.start_date)} - Present` : `${getFormatedDate(experience_data.start_date)} - ${getFormatedDate(experience_data.end_date)}`
}

function buildWorkHistoryDetails(experiences){
    const sorted_experiences = experiences.sort((e1,e2) => new Date(e2.start_date) - new Date(e1.start_date));
    return sorted_experiences.map((experience,i) => <li key={i}>
                                                        <div className="company-name">{experience.company}</div>
                                                        <h3 className="uppercase position">{experience.position}</h3>
                                                        <div className="durations">{getDurations(experience)}</div>
                                                        <ul className="role-description">
                                                            {
                                                                experience.role.map((role_desc,i) => <li key={i}>{role_desc}</li>)
                                                            }
                                                        </ul>
                                                    </li>);
}

function buildProjectDetails(projects){
    return projects.map((project,i) => <li key={i}>
                                            <p className="uppercase">{project.name}</p>
                                            <p>{project.description}</p>
                                            {project.url ? <p>{project.url || 'N/A'}</p> : ''}
                                        </li>);
}

function buildAchievementDetails(achievements){
    return achievements.map((achievement,i) => <li key={i}>{achievement}</li>);
}

function buildEducationDetails(educations){
    return educations.map((education,i) => <li key={i}>
                                             <p>{education.degree} {education.department} <span>({education.year})</span></p>
                                             <p>{education.college}</p>
                                          </li>)
}

function Body(props) {
    return (
        <div className="body">
            <div className="row">
                <div className="column1 col-lg-9 col-md-9 col-xs-9 col-sm-9">
                    <div className="intro">
                        <p className="about">{props.Profile.about}</p>
                    </div>
                    <div className="work-history">
                        <div className="heading">
                            <h5 className="uppercase">Work History</h5>
                        </div>
                        <div className="work-history-details">
                            <ul className="work-history-data">
                                {buildWorkHistoryDetails(props.Profile.experiences)}
                            </ul>
                        </div>
                    </div>
                    <div className="projects">
                        <div className="heading">
                            <h5 className="uppercase">Projects</h5>
                        </div>
                        <div className="project-details">
                            <ul className="projects-data">
                                {buildProjectDetails(props.Profile.projects)}
                            </ul>
                        </div>
                    </div>
                    <div className="achievements">
                        <div className="heading">
                            <h5 className="uppercase">Awards & Honors</h5>
                        </div>
                        <div className="achievement-details">
                            <ul className="achievement-data">
                                {buildAchievementDetails(props.Profile.achievements)}
                            </ul>
                        </div>
                    </div>
                    <div className="educations">
                        <div className="heading">
                            <h5 className="uppercase">Educations</h5>
                        </div>
                        <div className="education-details">
                            <ul className="education-data">
                                {buildEducationDetails(props.Profile.education)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="column2 col-lg-3 col-md-3 col-xs-3 col-sm-3">
                    <div className="contact">
                        <div className="heading">
                            <h5 className="uppercase">Contact</h5>
                        </div>
                        <div className="contact-details">
                            {buildContactDetails(props.Profile.contact)}
                        </div>
                    </div>
                    <div className="skills">
                        <div className="heading">
                            <h5 className="uppercase">Skills</h5>
                        </div>
                        <div className="skills-details">
                            {buildSkillDetails(props.Profile.skills)}
                        </div>
                    </div>
                    <div className="certifications">
                        <div className="heading">
                            <h5 className="uppercase">Certifications</h5>
                        </div>
                        <div className="certification-details">
                            <ul className="certification-data">
                                {buildCertificationDetails(props.Profile.certifications)}
                            </ul>
                        </div>
                    </div>
                    <div className="technologies">
                        <div className="heading">
                            <h5 className="uppercase">Technology</h5>
                        </div>
                        <div className="technology-details">
                            <ul className="technology-data">
                                {buildTechnologyDetails(props.Profile.technology)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
