import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from '../../Components/Hero'
import Feature from '../../Components/Feature'
import MainFeature from '../../Components/Main Feature'
import Timer from '../../Components/Timer'
import Blogs from '../../Components/Blogs'

function Index() {
  return (
    <div>
      <Helmet>
        <title>Home - Welcome to Our Store</title>
        <meta name="description" content="Discover our latest products and offers." />
      </Helmet>
      <main>
        <Hero/>
        <Feature/>
        <MainFeature/>
        <Timer/>
        <Blogs/>
      </main>
    </div>
  )
}

export default Index
