import React, { useState } from 'react'
import "./Resume.css"
import ScreenHeading from '../../utilitys/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilitys/scrollService'
import Animations from '../../utilitys/Animations'


export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({})

    const ResumeHeading = (props) => {
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className='heading-date'>
                            {props.fromDate + "_" + props.toDate}
                            </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                    <span>
                        {props.subheading ? props.subHeading : ''}
                    </span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        </div>
    }

    const resumeBullets = [
        {lable:'Education', logoSrc: "education.svg"},
        {lable: "Work History", logoSrc: "work-history.svg"},
        {lable: "Programming Skills", logoSrc:"programming-skill.svg"},
        {lable: "Projects", logoSrc: "projects.svg"},
        {lable: "Interests", logoSrc: "interests.svg"},
    ];

const programmingSkillDetails = [
    {skill: "JavaScript", ratingPercentage: 70},
    {skill: "ReactJS", ratingPercentage: 85},
    {skill: "Express", ratingPercentage: 70},
    {skill: "Node", ratingPercentage: 75},
    {skill: "MongoDB", ratingPercentage: 80},
    {skill: "SQL", ratingPercentage: 80},
    {skill: "REST", ratingPercentage: 85},
    {skill: "HTML", ratingPercentage: 85},
    {skill: "CSS", ratingPercentage: 85},
];

const projectsDetails =[
    {title:"Cody-Askew",
    duration: { fromDate: 2022, toDate:"Present" },
    description: "A Personal Portfolio Website",
    subHeading: "Technologies Used: React JS, Bootstrap"

},
    {title:"Cody-Askew",
    duration: { fromDate: 2022, toDate:"Present" },
    description: "A Personal Portfolio Website",
    subHeading: "Technologies Used: React JS, Bootstrap"

},
    {title:"Cody-Askew",
    duration: { fromDate: 2022, toDate:"Present" },
    description: "A Personal Portfolio Website",
    subHeading: "Technologies Used: React JS, Bootstrap"

},
];

const resumeDetails = [
    <div className='resume-screen-container' key="education">
        <ResumeHeading 
        heading={"Bloom Institute For Technology"}
        subHeading={"Certificate of Completion Full Stack Web Development"}
        fromDate={"2021"}
        toDate={"2022"}
        />
    </div>,
    <div className='resume-screen-container' key="work-experience">
        <ResumeHeading 
        heading={"Albuquerque NFC"}
        subHeading={"Owner Operator"}
        fromDate={"2017"}
        toDate={"2022"}
        />
        <div className='experience-description'>
            <span className='resume-description-text'>
                I am the owner of a small business selling and programming Near Field Communication products
            </span>
        </div>,
        <div className='resume-screen-container programming-skills-container' key="programming-skills">
            {programmingSkillDetails.map((skill, index) =>(
                <div className="skill-parent" key={index}>
                    <div className='heading-bullet'></div>
                    <span>{skill.skill}</span>
                    <div className='skill-percentage'>
                        <div style={{width: skill.ratingPercentage + "%"}} className="active-percentage">
                            </div>
                        </div>
                 </div>
            ))}
        </div>,

        <div className='resume-screen-container' key="projects">
            {projectsDetails.map((projectsDetails, index)=> (
                <ResumeHeading
                key={index}
                heading={projectsDetails.title}
                subHeading={projectsDetails.subHeading}
                description={projectsDetails.description}
                fromDate={projectsDetails.duration.fromDate}
                toDate={projectsDetails.duration.toDate}
                />
            ))}
        </div>,

        <div className='resume-screen-container' key="interest">
        <ResumeHeading
                heading="Teaching"
                subHeading="I have a dream to start a after school program to help teach young people coding and computer skills."
                />
        <ResumeHeading
                heading="Teaching"
                subHeading="I have a dream to start a after school program to help teach young people coding and computer skills."
                />
        <ResumeHeading
                heading="Teaching"
                subHeading="I have a dream to start a after school program to help teach young people coding and computer skills."
                />

        </div>
        
    </div>
    
]


    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreen(props);
      };
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe

  return (
    <div className='resume-container screen-container' id= {props.id || ""}>
        <div className='resume-content'>
            <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
        </div>
    </div>
  )
}
