import React from 'react'
import './Skills.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import timelineElements from "./Data";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as SchoolIcon } from "./Assets/school.svg";


function Skills({ id }) {
    const schoolIconStyles = { background: "#4D7099"};
    return (
      <>
        <div className="head" id={id}>
          <h2 className="title">Education</h2>
          <VerticalTimeline style={{background:"#E6E6E6"}}>
            {timelineElements.map((element) => {
              let listItems = element.icons.map((Icon) => {
                return Icon
              })
              return (
                <VerticalTimelineElement
                key={element.key}
                iconStyle={schoolIconStyles}
                icon={<SchoolIcon/>}
                contentArrowStyle={{ borderRight: '6px solid  #E6E6E6' }}
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