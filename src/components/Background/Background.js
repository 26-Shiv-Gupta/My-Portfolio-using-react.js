import React, { useState, useEffect } from 'react'
import './Background.css'
import react_img from '../../img/React_logo.png'
import angular_img from '../../img/Angular logo.png'
import bootstrap_img from '../../img/Bootstrap logo.png'
import css_img from '../../img/CSS logo.png'
import nodejs_img from '../../img/NodeJs_logo.png'
import html_img from '../../img/html logo.png'
import js_img from '../../img/javascript logo.png'

// function loadImg () {

// }
const Background = () => {
    const [images, setImages] = useState([
        react_img,
        angular_img,
        bootstrap_img,
        css_img,
        nodejs_img,
        react_img,
        js_img,
        html_img,
    ]);
    useEffect(() => {
        const rotateImages = () => {
            setImages((prevImages) => {
                const lastImage = prevImages[prevImages.length - 1];
                const remainingImages = prevImages.slice(0, -1);
                return [lastImage, ...remainingImages]; // Move last element to the front
            });
        };

        const intervalId = setInterval(rotateImages, 5000); // Rotate every 5 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="background">
            <div className="background-layer"></div>
            <div className="background-container">
                {images.map((image, index) => (
                    <div key={index} className={`delay${index + 1}`}>
                        <img src={image} alt={`Logo ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

//     return (
//         <background>
//             <div className='background-layer'></div>
//             <div className='backgraound-container'>
//                 <div className='delay1'>
//                     <img src={images[0]}></img>
//                 </div>
//                 <div className='delay2'>
//                     <img src={images[1]}></img>
//                 </div>
//                 <div className='delay3'>
//                     <img src={images[2]}></img>
//                 </div>
//                 <div className='delay4'>
//                     <img src={images[3]}></img>
//                 </div>
//                 <div className='delay5'>
//                     <img src={images[4]}></img>
//                 </div>
//                 <div className='delay6'>
//                     <img src={images[5]}></img>
//                 </div>
//                 <div className='delay7'>
//                     <img src={images[6]}></img>
//                 </div>
//                 <div className='delay8'>
//                     <img src={images[7]}></img>
//                 </div>
//             </div>
//         </background>
//     )
// }

export default Background;