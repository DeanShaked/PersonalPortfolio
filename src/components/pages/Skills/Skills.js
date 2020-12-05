import React from 'react'
import './Skills.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import timelineElements from "./Data";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as SchoolIcon } from "./Assets/school.svg";


function Skills({ id }) {
    const schoolIconStyles = { background: "#E6E6E6",border:'0'};
    return (
      <>
        <div className="head" id={id}>
          <VerticalTimeline style={{background:"#E6E6E6"}}>
            <title className="title">Education</title>
            {timelineElements.map((element) => {
              let listItems = element.icons.map((Icon) => {
                return Icon
              })
              return (
                <VerticalTimelineElement
                key={element.key}
                iconStyle={schoolIconStyles}
                icon={<SchoolIcon/>}
                contentArrowStyle={{background: '#E6E6E6 !important',
                  color:'#E6E6E6 !important'}}
                >
                  <h3 className="element-title">{element.title}</h3>
                  <hr/>
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