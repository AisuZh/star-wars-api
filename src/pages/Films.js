import React, { useEffect, useState } from 'react'
import Films_info from '../components/Films_info'

const Films = () => {
  const [films, setFilms] = useState([])
  useEffect(() => {
    async function fetchFilm() {
      let res = await fetch('https://swapi.dev/api/films/?format=json')
      let data = await res.json()
      setFilms(data.results)
    }
    fetchFilm()
  }, [])


  console.log(films)


  return (
    <div className='Films_info'> 
    {
      films.map((el,idx) => (
        <Films_info key={idx} title={el.title} producer={el.producer} release_date={el.release_date} opening_crawl={el.opening_crawl} />
      ))
    }

    </div>
  )
}

export default Films