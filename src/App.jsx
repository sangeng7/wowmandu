import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ScrollTop from './ScrollTop/ScrollTop'
import './responsive.scss'
import Admin from './Admin/Admin'
import Forget from './Forget/Forget'
import Reset from './Reset/Reset'
import Change from './Change/Change'

function App() {
  return (
    <>
    <Header/>
    <Footer/>
    <ScrollTop/>
    <Admin/>
    <Forget/>
    <Reset/>
    <Change/>
    </>
  )
}

export default App