import Head from 'next/head';
import React, { FC, ReactNode, useEffect, useState } from 'react'
import FavIcon from '../../assets/images/favicon.png';

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

      {children}
    </div>
  )
}

export default Layout;
