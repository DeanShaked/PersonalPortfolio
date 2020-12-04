import React from 'react'
import './Skills.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import timelineElements from "./Data";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as SchoolIcon } from "./Assets/school.svg";
import { ReactComponent as ReduxLogo } from './Assets/redux.svg'
import { IconContext } from 'react-icons';


function Skills({ id }) {
    const schoolIconStyles = { background: "#ffffff" };
    return (
      <>
        <div className="head" id={id}>
          <VerticalTimeline>
            <title className="title">Education</title>
            {timelineElements.map((element) => {
              let listItems = element.icons.map((Icon) => {
                return <Icon {...Icon} />
              })
              return (
                <VerticalTimelineElement
                  key={element.key}
                  iconStyle={schoolIconStyles}
                  icon={<SchoolIcon/>}
                >
                  <h3 className="element-title">{element.title}</h3>
                  {listItems}
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </>
    );
  }
  
  export default Skills;