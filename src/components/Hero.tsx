import { Link } from 'react-router-dom';

// @ts-ignore
import hero1 from "../assets/hero1.webp";
// @ts-ignore
import hero2 from '../assets/hero2.webp';
// @ts-ignore
import hero3 from '../assets/hero3.webp';
// @ts-ignore
import hero4 from '../assets/hero4.webp';


import React, {useState} from 'react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [hero1, hero2, hero3, hero4];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className='flex justify-between lg:flex gap-10 items-center'>
            <div className='lg:w-2/4'>
                <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
                    We are changing the way people shop
                </h1>
                <p className='mt-8 max-w-xl text-lg leading-8'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
                    repellat explicabo enim soluta temporibus asperiores aut obcaecati
                    perferendis porro nobis.
                </p>
                <div className='mt-10'>
                    <Link to='/products' className='btn btn-primary'>
                        Our Products
                    </Link>
                </div>
            </div>
            <div className="hidden w-2/4 h-[28rem] lg:carousel carousel-center space-x-4 rounded-box ">
                {slides.map((slide, index) => (
                    <div key={index} className={`carousel-item relative w-full ${index !== currentSlide ? 'hidden' : ''}` }>
                        <img src={slide} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <button onClick={prevSlide} className="btn btn-circle">❮</button>
                            <button onClick={nextSlide} className="btn btn-circle">❯</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Hero;
