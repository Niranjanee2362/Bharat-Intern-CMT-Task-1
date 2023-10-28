

import Banner from '@/components/landing/Banner'
import Blogs from '@/components/landing/Blogs'
import Category from '@/components/landing/Category'
import Hero from '@/components/landing/Hero'
import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import { useRouter } from 'next/router'


export default function Home() {
  
  return (
    <>
    <Header/>
    <Hero />
    <Blogs/>
    <Category/>
    <Banner/>
    <Footer/>
    </>
  )
}
