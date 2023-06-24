/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Head from 'next/head';
import Script from 'next/script';
import React, { FC, ReactNode, useEffect, useState } from 'react'
import FavIcon from '../../assets/images/favicon.png';
import Loader from '../ui/Loader';

interface ILayoutProps {
  title: string
  children: ReactNode
}

const Layout: FC<ILayoutProps> = ({ title, children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true)
    const timeout = setTimeout(() => { setIsLoading(false) }, 4000)

    return () => {
      clearTimeout(timeout)
    }
  }, []);

  return (
    <div>
      <Head>
        <title>{title} | Taxi App</title>
        <meta name="description" content="Taxi App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/png" href={FavIcon.src} />
      </Head>

      <Script
        strategy='beforeInteractive'
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.MAP_KEY}&libraries=places`}
      ></Script>

      <div style={{ maxWidth: 480, }} className='mx-auto relative overflow-hidden'>
        {isLoading ? <Loader /> : children}
      </div>
    </div>
  )
}

export default Layout;
