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
            </div>
        </div>
    }

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
