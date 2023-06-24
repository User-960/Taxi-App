import React from 'react';
import Image from 'next/image';
import PreloaderImage from '../../assets/images/preloader.png';

const Loader = () => {
  return (
    <div className='w-screen h-screen'>
      <Image src={PreloaderImage.src} alt='preloader' layout='fill' priority={true} />
    </div>
  )
}

export default Loader;
