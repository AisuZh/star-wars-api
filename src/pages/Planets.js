import React, { useEffect, useState } from 'react'

import Planets_info from '../components/Planets_info'

const Planets = () => {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    async function fetchPlanets() {
      let ress = await fetch('https://swapi.dev/api/planets/?format=json')
      let dataa = await ress.json()
      setPlanets(dataa.results)
    }

    fetchPlanets()

  },[])

  console.log(planets)


  return (
    <div className='Planets_info' >
    {
      planets.map((el,idx)=> (
        <Planets_info key={idx} name={el.name} population={el.population} climate={el.climate} terrain={el.terrain} orbital_period={el.orbital_period} />
      ))
    }

    </div>
  )
}

export default Planets