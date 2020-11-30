import React from 'react';
import { Button } from '../../Button';
import './Projects.css';
import { hebrapImgs,securedLoginImgs,quizGameImgs } from './Data'
import ItemProject from './ItemProject'

function Projects({id}) {
  
  return (
      <div className='projects__section' id={id}>
        <div className='projects__wrapper'>
          <h1 className='projects__heading'>Projects</h1>
          <div className='projects__container'>
            <ItemProject img={hebrapImgs.img} secondImg={hebrapImgs.secondImg} alt={hebrapImgs.alt}>
            </ItemProject>
            <ItemProject img={securedLoginImgs.img} secondImg={securedLoginImgs.secondImg} alt={securedLoginImgs.alt} />
            <ItemProject img={quizGameImgs.img} secondImg={quizGameImgs.secondImg} alt={quizGameImgs.alt} />
            <ItemProject img={quizGameImgs.img} secondImg={quizGameImgs.secondImg} alt={quizGameImgs.alt} />
          </div>
        </div>
      </div>
  );
}
export default Projects;
