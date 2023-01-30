import React from 'react'
import Info from './components/info'
import About from './components/About'
import Interests from './components/Interests'
import Social from "./components/Social"
export default function App(){
    return (
        <div className='container'>
            <Info />
            <About />
            <Interests />
            <Social />

        </div>
    )
}