const ProjectButtons = ({viewCode, viewLive, viewDetails, resizing}) => {

    return (
        <div className="project-button-container">
            <button className={`project-button view-code ${viewCode[0] ? 'project-button-true' : 'project-button-false'} ${viewDetails && viewCode[0] ? 'project-button-details' : ''} ${resizing ? "no-animation" : ""}`}>
                <a href={viewCode[2]} target="_blank" rel="noreferrer">{viewCode[0] && !viewCode[1] ? 'View Code' : viewCode[1]}</a>
            </button>
            <button className={`project-button view-live ${viewLive[0] ? 'project-button-true' : 'project-button-false'} ${viewDetails && viewLive[0] ? 'project-button-details' : ''} ${resizing ? "no-animation" : ""}`}>
                <a href={viewLive[2]} target="_blank" rel="noreferrer">{viewLive[0] && !viewLive[1] ? 'View Live' : viewLive[1]}</a>
            </button>
        </div>
    )
}

export default ProjectButtons;