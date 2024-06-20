import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/ImageSlider.css';
import desert from '../assets/images/slider/desert.jpg';
import beach from '../assets/images/slider/beach.jpg';
import castle from '../assets/images/slider/castle.jpg';
import mosque from '../assets/images/slider/mosque.jpg';

const images = [
    { id: 1, url: desert },
    { id: 2, url: beach },
    { id: 3, url: castle },
    { id: 4, url: mosque },
];

const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [animationDirection, setAnimationDirection] = useState('slideInRight');
    const prevImage = useRef(currentImage);
    const intervalRef = useRef(null);

    const handleThumbnailClick = (index) => {
        clearInterval(intervalRef.current); // Clear the existing interval
        if (index > currentImage) {
            setAnimationDirection('slideInRight');
        } else {
            setAnimationDirection('slideInLeft');
        }
        setCurrentImage(index);
        startInterval(); // Start a new interval
    };

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setAnimationDirection('slideInRight');
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000); // Change image every 5 seconds
    };

    useEffect(() => {
        startInterval(); // Start the interval on component mount

        return () => clearInterval(intervalRef.current); // Clear the interval on component unmount
    }, []);

    useEffect(() => {
        if (currentImage > prevImage.current) {
            setAnimationDirection('slideInRight');
        } else if (currentImage < prevImage.current) {
            setAnimationDirection('slideInLeft');
        }
        prevImage.current = currentImage;
    }, [currentImage]);

    return (
        <div className="image-slider">
            <div className="main-image-container">
                <img
                    key={currentImage} // Use key to re-trigger animation
                    src={images[currentImage].url}
                    alt={`Slide ${images[currentImage].id}`}
                    className={`main-image ${animationDirection}`}
                />
            </div>
            <div className="thumbnails-container">
                {images.map((image, index) => (
                    <img
                        key={image.id}
                        src={image.url}
                        alt={`Thumbnail ${image.id}`}
                        className={`thumbnail-image ${index === currentImage ? 'active' : ''}`}
                        onClick={() => handleThumbnailClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
