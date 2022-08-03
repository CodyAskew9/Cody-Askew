import React, { useState } from 'react'
import "./Resume.css"
import ScreenHeading from '../../utilitys/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilitys/scrollService'
import Animations from '../../utilitys/Animations'


export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({})

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return(
               <div className='resume-heading'>
                   <div className='resume-main-heading'>
                       <div className='heading-bullet'></div>
                       <div>
                           <span>{props.heading ? props.heading : ''}</span>
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
                        {props.subHeading ? props.subHeading : " "}
                    </span>
                 </div>
                 <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        </div>
        )
    }

    const resumeBullets = [
        {label: "Education", logoSrc: "education.svg"},
        {label: "Work Experience", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc:"programming.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Interests", logoSrc: "interests.svg"},
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
    {title:"Class Store",
    duration: { fromDate: 2022, toDate:"Present" },
    description: "A Amazon clone used by a third grade teacher to teach her students about the use of money",
    subHeading: "Technologies Used: React JS, Redux, MangoDB, Node, Express"

},
    {title:"Keyless Remotes 4less",
    duration: { fromDate: 2022, toDate:"Present" },
    description: "A E-commerce site built for a friends small business",
    subHeading: "Technologies Used: React JS, Bootstrap, MangoDb, Node, Express"

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
        <div className="experience-container">
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
            <br/>
        <ResumeHeading 
        heading={"Vintage Motors"}
        subHeading={"Finance Manager"}
        fromDate={"2016"}
        toDate={"2017"}
        />
            <span className='resume-description-text'>
            Identified and capitalized on community business opportunities through  effective networking to establish lines of business and financing to establish vintage auto dealership
            </span>
            <br/>
        <ResumeHeading 
        heading={"VerVarious Auto Dealerships"}
        subHeading={"Internet Sales"}
        fromDate={"2012"}
        toDate={"2015"}
        />
            <span className='resume-description-text'>
            Coached sales associates in product specifications, sales incentives and selling techniques, significantly increasing customer satisfaction ratings
Responded to internet inquiries and phone calls in a timely manner
            </span>
            <br />
            </div>
            </div>
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
                heading="Tech"
                subHeading="I love new and interesting tech. I have smart rings watches a NFC chip in my hand if it is new futuristic tech I am into it."
                />
        <ResumeHeading
                heading="Gaming"
                subHeading="I started playing video games at a young age. As someone with a bleeding disorder I wasn't allowed to go outside and play like other kids the risks were too high so games were my escape"
                />
    </div>
];

const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
        style: {transform: "translateY(" + index * offsetHeight * -1 +"px)"}
    };
    setCarousalOffSetStyle(newCarousalOffset)
    setSelectedBulletIndex(index)
};

const getBullets = () => {
    return resumeBullets.map((bullet, index) =>{
        return (
            <div onClick={() => handleCarousal(index)} className={index=== selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                key={index}>
                <img className='bullet-logo' src={require(`../../assets/Resume/${bullet.logoSrc}`
                )}
                    alt='no internet connection' />
                    <span className='bullet-label'>{bullet.label}</span>
            </div>
        )
    })
}
   
const getResumeScreens = () => {
    return(
        <div style={carousalOffSetStyle.style}
        className='resume-detail-carousal'>
            {resumeDetails.map((resumeDetails) => resumeDetails)}

        </div>
    )
}

  return (
    <div className='resume-container screen-container' id= {props.id || ""}>
        <div className='resume-content'>
            <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
            <div className='resume-card'>
                <div className='resume-bullets'>
                    <div className='bullet-container'>
                        <div className='bullet-icons'>
                        </div>
                        <div className='bullets'>{getBullets()}</div>
                    </div>
                </div>
                <div className='resume-bullets-details'>{getResumeScreens()}</div>
            </div>
        </div>
    </div>
  )
}
