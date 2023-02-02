import React, { useEffect, useState } from 'react'


import People_info from '../components/People_info'


const People = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        async function fetchPeople() {
            let res = await fetch('https://swapi.dev/api/people/?format=json')
            let data = await res.json()
            setPeople(data.results)
        }

        fetchPeople()

    }, [])


    console.log(people)


    return (
        <div className='People_info'> 
        {
            people.map((el,idx) => (
                <People_info key={idx} name={el.name} hair_color={el.hair_color} birth_year={el.birth_year} />
            ))
        }


        </div>
    )
}

export default People

