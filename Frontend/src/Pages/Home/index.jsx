import React from 'react'
import Hero from '../../Components/Hero'
import Feature from '../../Components/Feature'
import MainFeature from '../../Components/Main Feature'
import Timer from '../../Components/Timer'
import Blogs from '../../Components/Blogs'
function index() {
  return (
    <div>
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

export default index
