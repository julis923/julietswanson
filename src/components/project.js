import { useState } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/arrowIcon.png';

const Project = ({ title, mainImg, id, hex }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link to={`/project/${id}`}>
      <div
        className="project-media"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        // style={{borderLeft: `5px solid ${hex}`}}
      >
        <img src={mainImg} alt={title} />
        {hover ? (
          <div className="project-media__hover">
            <p>{title}</p>
            <div className="arrow">
              <img src={arrow} alt="view" />
            </div>
          </div>
        ) : null}
      </div>
    </Link>
  );
};

export default Project;
