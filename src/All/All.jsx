import React from 'react'
import Trending from '../Trending/Trending'
import Picks from '../Picks/Picks'
import Banner from '../Banner/Banner'
import Sports from '../Sports/Sports'
import International from '../International/International'
import Cards from '../Cards/Cards'
import ScrollTop from '../ScrollTop/ScrollTop'
import National from '../National/National'
import Politics from '../Politics/Politics'

function All() {
  return (
    <>
    <Cards/>
    <Trending/>
    <Banner/>
    <Picks/>
    <National/>
    <Politics/>
    <Banner/>
    <International/>
    <Sports/>
    <Banner/>
    <ScrollTop/>
    </>
  )
}

export default All
