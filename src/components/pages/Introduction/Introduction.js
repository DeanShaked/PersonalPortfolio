import React from 'react'
import './Introduction.css'

function Introduction({ id }) {
    return (
      <div className='projects__section' id={id}>
      <div className='projects__wrapper'>
        <h1 className='projects__heading'>Intro</h1>
        <div className='projects__container'>
        </div>
      </div>
    </div>
    );
  }
  
  export default Introduction;