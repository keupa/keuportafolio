import React from 'react'
import { MenuItems } from './MenuItems'
import './navbar.css'

function Navbar() {
    return(
        <nav className='nav-container'>
            <a className='home-is-where-the-heart-is' href='/'>♡</a>
            <ul className='list-container'>
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}> 
                                {item.title} 
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar