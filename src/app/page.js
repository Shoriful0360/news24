import Banner from '@/component/homePage/Banner'
import NewsCard from '@/component/homePage/NewsCard'
import React from 'react'

function HomePage() {
  return (
    <div>
      <Banner></Banner>
      <div className='mt-10'>
        <h2 className='text-3xl font-bold'>Latest News</h2>
     <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
        <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
  </div>
      </div>
 
    </div>
  )
}

export default HomePage