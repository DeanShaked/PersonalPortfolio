import React from 'react';
import './Projects.css';
import { hebrap,securedLogin,portfolio,backgammonGame} from './Data'
import ItemProject from './ItemProject'

function Projects({id}) {
  
  return (
      <div className='projects__section' id={id}>
        <div className='projects__wrapper'>
          <h1 className='projects__heading'>Projects</h1>
          <div className='projects__container'>
            <ItemProject img={backgammonGame.img} alt={backgammonGame.alt} url={backgammonGame.url} description={backgammonGame.description} />
            <ItemProject img={hebrap.img} alt={hebrap.alt} url={hebrap.url} description={hebrap.description}/>

            <ItemProject img={securedLogin.img} alt={securedLogin.alt} url={securedLogin.url} description={securedLogin.description} />
            <ItemProject img={portfolio.img} alt={portfolio.alt} url={portfolio.url} description={portfolio.description} />
          </div>
        </div>
      </div>
  );
}
export default Projects;
