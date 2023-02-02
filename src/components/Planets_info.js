import React from 'react'

const Planets_info = ({name, population, terrain,climate,orbital_period}) => {
  return (
<div className='planets_cards'>
                <div className='container'>
                    <div className='planets'>
                        <p className='planets__name'>
                           {name}
                        </p>
                        <p className='planets__info'>
                        Population:  {population}
                        </p>
                        <p className='planets__info'>
                        Climate:  {climate}
                        </p>
                        <p className='planets__info'>
                        Orbital period:  {orbital_period}
                        </p>
                        <p className='planets__info'>
                        Terrain: {terrain}
                        </p>
                    </div>
                </div>
            </div>
  )
}

export default Planets_info