import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({children, className=''}) {
  return (
    <>
    <div className='w-full flex flex-col justify-between content-between'>
    <Navbar/>
    <main className={className}>{children}</main>
    <Footer/>
    </div>
    </>
  )
}
