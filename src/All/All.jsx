import React from 'react'
import Trending from '../Trending/Trending'
import Picks from '../Picks/Picks'
import Banner from '../Banner/Banner'
import Travel from '../Travel/Travel'
import Sports from '../Sports/Sports'
import International from '../International/International'
import Cards from '../Cards/Cards'

function All() {
  return (
    <>
    <Cards/>
    <Trending/>
    <Banner/>
    <Picks/>
    <Travel/>
    <Banner/>
    <Sports/>
    <International/>
    <Banner/>
    </>
  )
}

export default All
