import React from 'react'

const People_info = ({ name, birth_year, hair_color }) => {
    return (

            <div className='people_cards'>
                <div className='container'>
                    <div className='people'>
                        <p className='people__name'>
                           {name}
                        </p>
                        <p className='people__info'>
                            Birth year:  {birth_year}
                        </p>
                        <p className='people__info'>
                            Hair color:  {hair_color}
                        </p>
                    </div>
                </div>
            </div>
    
    )
}

export default People_info