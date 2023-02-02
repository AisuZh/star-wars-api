import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
        <div className='header__wrapper'>
                <NavLink to="/" className='header__logo'>STAR WARS</NavLink>
                <nav className='header__nav'>
                    <NavLink to="/" className='header__link'> Home</NavLink>
                    <NavLink to="/people" className='header__link'>People</NavLink>
                    <NavLink to="/planets" className='header__link'>Planets</NavLink>
                    <NavLink to="/films" className='header__link'>Films</NavLink>
            </nav>
            </div>
        </div>
        </header>
    )
}

export default Header



