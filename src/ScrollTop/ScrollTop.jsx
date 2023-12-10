import React from 'react'
import './ScrollTop.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function ScrollTop() {
    return (
        <>
            <div className='box' >
                <a href='#root'><FontAwesomeIcon className='top' icon={faArrowUp} /></a>
            </div>
        </>
    )
}

export default ScrollTop