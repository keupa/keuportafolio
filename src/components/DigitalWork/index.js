import React from 'react'
import pie from '../../images/pie.png'
import './digitalWork.css'

const cherrypie = 'https://www.youtube.com/watch?v=3bE2FhgXc7s'

function DigitalWork() {
    return(
        <div className='digital-work-container'>
            <div className='temporal-announcement'> 
                <h3 className='thispage'>This page is</h3>
                <h1 className='under'>UNDER CONSTRUCTION</h1>
                <img src={pie} alt='yummy pie' className='pieimg' />
                <p className='backmessage'><b>Come back soon!</b> In the meantime <a href={cherrypie} target="_blank">enjoy some pie</a> :-)</p>
            </div>
        </div>
    )
}

export default DigitalWork