import React from 'react'
import Header from './Header/Header'
import Cards from './Cards/Cards'
import Picks from './Picks/Picks'
import Banner from './Banner/Banner'
import Travel from './Travel/Travel'
import Trending from './Trending/Trending'
import Sports from './Sports/Sports'
import International from './International/International'
import Footer from './Footer/Footer'
import ScrollTop from './ScrollTop/ScrollTop'
import './responsive.scss'
import InternationalChild from './InternationalChild/InternationalChild'

function App() {
  return (
    <>
    <Header/>
    <Cards/>
    <Trending/>
    <Picks/>
    <Banner/>
    <Travel/>
    <Sports/>
    <International/>
    <Footer/>
    <ScrollTop/>
    <InternationalChild/>

    </>
  )
}

export default App