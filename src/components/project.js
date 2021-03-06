import macbook from '../assets/macbook-outline.png'
import React, { useState, useRef } from 'react';
import ProjectButtons from './projectButtons';
import ProjectGallery from './projectGallery';
import ChevronSvg from './chevronSvg';


const Project = ({ hashlink, title, description, mainImg, types, viewCode, viewLive, viewDemo, project, projectProcess, details, resizing }) => {

    const [viewDetails, setViewDetails] = useState(false)
    const [toggler, setToggler] = useState(false)

    const projectWrapper = useRef();
    const projectDetails = useRef();


    const handleProjectView = () => {
        setViewDetails(!viewDetails)
        if (viewDetails) {
            projectWrapper.current.scrollIntoView({behavior: "smooth", block: "start"});
        } else {
            projectDetails.current.scrollIntoView({behavior: "smooth", block: "start"})
        }
    }


    
    return (
        <>
            <div className={`project-wrapper`} ref={projectWrapper} id={hashlink}>
                <div className="project-text">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <ul>
                        {types.map((type) => {
                            return <li key={`${title}-${type}`}>{type}</li>
                        })}
                    </ul>
                    <ProjectButtons viewDetails={viewDetails} viewCode={viewCode} viewLive={viewLive} viewDemo={viewDemo} title={title} resizing={resizing}/>
                    <div className="toggle-container" onClick={() => handleProjectView()} onMouseOver={() => setToggler(true)} onMouseLeave={() => setToggler(false)}>
                        <p className={`details-toggle ${toggler ? 'details-toggle-focus' : ''} ${viewDetails ? 'details-toggle-view' : ''}`}>{viewDetails ? 'Hide' : 'Show'} Full Details</p>
                        <ChevronSvg fill={toggler || viewDetails ? "#FFBD13" : "rgb(253, 106, 0)"} setToggler={setToggler} viewDetails={viewDetails} />
                    </div>
                    
                </div>
                <div className="project-media">
                    <div className="video-wrapper">
                        <div className="video-bg"></div>
                        <div className="color-bg"></div>
                        <div className="color-bg-2"></div>
                        <img src={macbook} alt="macbook" className="macbook"/>
                        {mainImg.type === 'video' ? 
                            <video className="video" loop autoPlay muted webkit-playsinline="true" playsInline >
                                <source src={mainImg.content} type="video/mp4"></source>
                                Your browser does not support this video
                            </video>
                            :
                            <img src={mainImg.content} alt={mainImg.alt} className="project-image"/>
                        }
                        <div className="video-shadow" onClick={() => handleProjectView()} onMouseOver={() => setToggler(true)} onMouseLeave={() => setToggler(false)}></div>
                    </div>
                </div>
            </div>
            <div className={`${viewDetails ? "project-details" : "hidden-details"} ${resizing ? "no-transition" : ""}`}>
                <div className="project-details-content" ref={projectDetails}>
                    <div className="detail-section">
                        <h4>The Project</h4>
                        {project.map((text, i) => {
                            return (
                                <div key={`${title}-text-${i}`}>
                                    <p>{text}</p>
                                    <br/>
                                </div>
                            )
                        })}
                    </div>
                    <div className="detail-section">
                        <h4>The Process</h4>
                        <ol>
                            {
                                projectProcess.map((item, i) => {
                                    return (
                                        <div className="list-section" key={`${title}-process-${i}`}>
                                            <li className="list-title">{item.step}</li>
                                            {item.description.map((text, i) => {
                                                return (
                                                    <div key={`${title}-step-${i}`}>
                                                        <p>{text}</p>
                                                        <br/>
                                                    </div>
                                                )
                                            })}
                                            <div className={item.images[0] ? "list-section-images": ""}>
                                                { item.images[0] && item.images[1] ? 
                                                    <ProjectGallery images={item.images} /> : null
                                                }
                                                { item.images[0] && !item.images[1] ? 
                                                    <div className="image-container">
                                                        {
                                                            item.images.map((image, i) => {
                                                                return <img src={image.content} alt={image.alt} key={`${title}-img-${i}`}></img>
                                                            })
                                                        }
                                                    </div>
                                                    : null
                                                }
                                                {
                                                    item.link && viewDetails ? 
                                                    <div className="iframe-container">
                                                        <iframe title="figma wireframe" style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} width="100%" height="450px" src={item.link} allowFullScreen></iframe>
                                                    </div>
                                                    : null

                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </ol>
                    </div>
                    <div className="detail-section tech-details">
                        <h4>Technical Details</h4>
                        <ul>
                            {
                                details.map((detail, i) => {
                                    return <li key={`${title}-detail-${i}`}>{detail}</li>
                                })
                            }
                        </ul>
                    </div>
                    <ProjectButtons viewDetails={viewDetails} viewCode={viewCode} viewLive={viewLive} viewDemo={viewDemo}/>
                </div>
            </div>
        </>

    )
}

export default Project;