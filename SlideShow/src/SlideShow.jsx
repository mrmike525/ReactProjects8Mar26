import Peepers from './assets/Peepers.jpeg'
import AbbyAndBecca from './assets/AbbyAndBecca.jpeg'
import Me from './assets/Me.jpeg'
import Dexter from './assets/Dexter.jpeg'
import Family from './assets/Family.jpeg'
import AbbyAndI from './assets/AbbyAndI.jpeg'
import { useState } from 'react'

import "./SlideShow.css"
function SlideShow() {
    const [pic, setPic] = useState(Peepers);
    function clickHandler() {
        const selection = [Peepers, AbbyAndBecca, Me, Dexter, Family, AbbyAndI];
        const value = selection.indexOf(pic) 
        return selection[random(value, selection.length)]
    }
    function random(value, arrayLength) {
        let rando = Math.floor(Math.random() * arrayLength)
        while (value === rando) {
            rando = Math.floor(Math.random() * arrayLength)
        } 
     return rando }

    return (
        <div className='imgHeader'><img src={pic} alt=""
        onClick={()=>setPic(()=>clickHandler())}
        /></div>
    )
}

export default SlideShow