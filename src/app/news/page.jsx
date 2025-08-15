import NewsList from '@/component/news/NewsList'
import React from 'react'

function Newspage() {
  return (
    <div>
        <h2 className='text-xl font-semibold'>Latest News</h2>
       
        <div>
         <NewsList/>
           <div>

           </div>
        </div>
    </div>
  )
}

export default Newspage