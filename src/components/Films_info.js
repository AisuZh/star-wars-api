import React from 'react'

const Films_info = ({ title, producer,opening_crawl,release_date}) => {
    return (
        <div className='film_cards'>
            <div className='container'>
                <div className='film'>
                    <p className='film__name'>
                        {title}
                    </p>
                    <p className='film__info'>
                    Producer:  {producer}
                    </p>
                    <p className='film__info'>
                       Release date:  {release_date}
                    </p>
                    <p className='film__info'>
                        Opening crawl:  {opening_crawl}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Films_info