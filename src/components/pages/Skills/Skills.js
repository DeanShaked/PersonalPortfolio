import React from 'react'
import './Skills.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import timelineElements from "./Data";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import { ReactComponent as Cicon } from "./C.svg";

function Skills({ id }) {
    const workIconStyles = { background: "#ffffff" };
    const schoolIconStyles = { background: "#ffffff" };
    return (
      <>
        <div className="head" id={id}>
          <VerticalTimeline>
            {timelineElements.map((element) => {
              let isWorkIcon = element.icon === "work";
              let showButton =
                element.buttonText !== undefined &&
                element.buttonText !== null &&
                element.buttonText !== "";

              return (
                <VerticalTimelineElement
                  key={element.key}
                  iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                  icon={isWorkIcon ? <Cicon /> : <SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  
                  <p id="description">{element.description}</p>
                  {showButton && (
                    <a
                      className={`button ${
                        isWorkIcon ? "workButton" : "schoolButton"
                      }`}
                      href="/"
                    >
                      {element.buttonText}
                    </a>
                  )}
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </>
    );
  }
  
  export default Skills;