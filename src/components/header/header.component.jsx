import React from 'react'
import { Link } from 'react-router-dom'

import './header.styles.scss'

const Header = () => (
    <div className='header'>
        <div className='content'>
            <span className='title'>
                <Link to='/'>ben reilly</Link>
            </span>
            <span className='links'>
                <span className='works'><Link to='/'>works</Link></span>
                <span className='about'><Link to='/about'>about</Link></span>
            </span>
        </div>
        <div className='divider'></div>
    </div>
)

export default Header