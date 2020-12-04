import React,{useState} from 'react'
import { FaGithub } from 'react-icons/fa';

function ItemProject({
    img,
    alt,
    url,
    description
}) {
    const [imgActive, setImg] = useState(false);

    return (
        <div className='projects__container-card'>
              {imgActive ? 
              (<a href={url}><img src={img} alt={alt} className="projects__imgs" onMouseOver = {() => setImg(true)} onMouseOut={() => setImg(false)}/></a>)
              : (
              <div className="buttons-wrapper" onMouseOver = {() => setImg(true)} onMouseOut={() => setImg(false)}>
                  <p className="desciption">{description}</p>
                  <FaGithub className="projects__git-hub"/>
              </div>
              )}
         </div>
    )
}

export default ItemProject;
