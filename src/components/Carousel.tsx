import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from "next/image";
import carouselStyles from "../styles/carousel.module.css"

interface CarouselProps {
    images: StaticImageData[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex: number) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className={carouselStyles.carousel}>
            <span className={carouselStyles.leftArrow} onClick={goToPrevious}>❮</span>
            <Image src={images[currentIndex]} alt={`Slide ${currentIndex}`}
                layout="responsive"
                objectPosition="relative"
                objectFit="cover"
                priority />
            <span className={carouselStyles.rightArrow} onClick={goToNext}>❯</span>
        </div>
    );
};

export default Carousel;
