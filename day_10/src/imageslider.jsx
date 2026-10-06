import React, { useEffect, useState } from "react";

const ImageSlider = () => {

    const [index, setIndex] = useState(0);

    const images = [
        "https://plus.unsplash.com/premium_photo-1669740462478-135db9b990ea?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1600409396055-e2f42d491271?q=80&w=410&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://static.vecteezy.com/system/resources/thumbnails/022/056/236/small_2x/abstract-animal-owl-portrait-with-colorful-double-exposure-paint-with-generative-ai-photo.jpeg"
    ];

    useEffect(() => {

        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div style={{ border: "2px solid black" }}>
            <h1>Image Slider</h1>

            <img
                src={images[index]}
                alt="slider"
                style={{
                    height: "300px",
                    width: "300px",
                    objectFit: "cover"
                }}
            />

        </div>
    );
};

export default ImageSlider;