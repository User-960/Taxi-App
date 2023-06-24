import { Inter } from 'next/font/google'
import type { NextPage } from 'next'
import Home from '@/app/components/screens/home/Home'

const inter = Inter({ subsets: ['latin'] })

const HomePage: NextPage = () => {
  return <Home />
}

export default HomePage;
