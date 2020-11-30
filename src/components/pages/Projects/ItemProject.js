import React,{useState} from 'react'

function ItemProject({
    img,
    secondImg,
    alt
}) {
    const [imgActive, setImg] = useState(true);

    return (
        <div className='projects__container-card'>
              {imgActive ? 
              (<img src={img} alt={alt} className="projects__imgs" onMouseOver = {() => setImg(false)} onMouseOut={() => setImg(true)}/>)
              : (<img src={secondImg} alt={alt} className="projects__imgs" onMouseOver = {() => setImg(false)} onMouseOut={() => setImg(true)}/>)
              }

                {imgActive ? null :<button className="projects__demo"> Live-Demo</button>}
                {imgActive ? null : <button className="projects__git-hub">GitHub</button>}

         </div>
    )
}

export default ItemProject;
