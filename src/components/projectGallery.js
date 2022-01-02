import React, { useState, useEffect } from 'react';

const ProjectGallery = ({ images }) => {

    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const galleryInterval = setInterval(() => {
            const nextImage = currentImage + 1
            if (images[nextImage]) {
                setCurrentImage(nextImage)
            } else {
                setCurrentImage(0)
            }
        }, 4000)
        return () => {
            clearInterval(galleryInterval);
        }
    })

    return (
        <>
        <div className="gallery-container">
            <div className="image-container">
                {
                    images.map((image, i) => {
                        return <img src={image.content} alt={image.alt} className={i === currentImage ? 'current-image': ''} key={`${image.alt}-${i}`}></img>
                    })
                }
            </div>
            <div className="dot-container">
                {
                    images.map((image, i) => {
                        return <div className={i === currentImage ? "current-dot dot" : "dot"} onClick={() => setCurrentImage(i)} key={`${image.alt}-${i}-dot`}></div>
                    })
                }
            </div>
        </div>
        </>
    )
}

export default ProjectGallery;