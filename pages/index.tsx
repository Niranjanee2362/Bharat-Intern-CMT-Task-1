

import Banner from '@/components/landing/Banner'
import Blogs from '@/components/landing/Blogs'
import Category from '@/components/landing/Category'
import Hero from '@/components/landing/Hero'
import Head from 'next/head'



export default function Home() {
  
  return (
    <>
    <Head>
      <title>BharatBlog</title>
    </Head>
    <Hero />
    <Blogs/>
    <Category/>
    <Banner/>
    </>
  )
}
