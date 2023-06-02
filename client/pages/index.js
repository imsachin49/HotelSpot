import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Property from '@/components/Property'
import Featured from '@/components/Featured'
import FeaturedProperties from '@/components/FeaturedProperties'
import QuickEasy from '@/components/QuickEasy'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isSmall, setIsSmall] = useState(false)
  
  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main>
      <Navbar isSmall={isSmall} />
      <TopBar isSmall={isSmall} type='home' />
      <div className='xs:mt-[280px] md:mt-0'>
        <Featured isSmall={isSmall} />
      </div>
      <Property />
      <FeaturedProperties />
      <Newsletter />
      <Footer /> 
    </main>
  )
}
