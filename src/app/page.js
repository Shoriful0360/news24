
import Banner from '@/component/homePage/Banner'
import NewsCard from '@/component/homePage/NewsCard'
import React from 'react'

async function  HomePage () {
  const data =await fetch('http://localhost:3000/newsJsonfile.json')
  const news=await data.json();
 
  return (
    <div>
      <Banner></Banner>
      <div className='mt-10'>
        <h2 className='text-3xl font-bold'>Latest News</h2>
     <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
      {
        news.map((item)=>  <NewsCard key={item?.id} item={item}/>)
      }
      

  </div>
      </div>
 
    </div>
  )
}

export default HomePage