import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
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
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={hero1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={hero2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle swap">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={hero3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={hero4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;
