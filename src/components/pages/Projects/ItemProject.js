import React,{useState} from 'react'
import { FaGithub } from 'react-icons/fa';

function ItemProject({
    img,
    alt,
    url,
    description
}) {
    const [imgActive, setImg] = useState(true);

    return (
        <div className='projects__container-card'>
              {imgActive ? 
              (<img src={img} alt={alt} className="projects__imgs" onMouseOver = {() => setImg(false)} onMouseOut={() => setImg(true)}/>)
              : (
              <div className="buttons-wrapper" onMouseOver = {() => setImg(false)} onMouseOut={() => setImg(true)}>
                  <p className="desciption">{description}</p>
                  <a href={url}><FaGithub className="projects__git-hub"/></a>
              </div>
              )}
         </div>
    )
}

export default ItemProject;
