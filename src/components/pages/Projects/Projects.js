import React from 'react';
import './Projects.css';
import { hebrapImgs,securedLoginImgs,quizGameImgs } from './Data'
import ItemProject from './ItemProject'
import { Link } from 'react-router-dom'

function Projects({id}) {
  
  return (
      <div className='projects__section' id={id}>
        <div className='projects__wrapper'>
          <h1 className='projects__heading'>Projects</h1>
          <div className='projects__container'>
            <div className="item-wrapper">
              <ItemProject img={hebrapImgs.img} alt={hebrapImgs.alt}/>
            </div>
            <ItemProject img={securedLoginImgs.img} secondImg={securedLoginImgs.secondImg} alt={securedLoginImgs.alt} />
            <ItemProject img={quizGameImgs.img} secondImg={quizGameImgs.secondImg} alt={quizGameImgs.alt} />
            <ItemProject img={quizGameImgs.img} secondImg={quizGameImgs.secondImg} alt={quizGameImgs.alt} />
          </div>
        </div>
      </div>
  );
}
export default Projects;
