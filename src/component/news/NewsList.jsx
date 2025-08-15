'use client'
import fetchNews from '@/lib/fetchNews';
import React, { useEffect, useState } from 'react'
import NewsCard from '../homePage/NewsCard';
import { Input } from '@/components/ui/input';
function NewsList() {
    const [news,setNews]=useState([]);
    const{search,setSearch}=useState("")
    const[category,setCategory]=useState("")
useEffect(()=>{
    const getNews=async()=>{
        const data=await fetchNews()
        setNews(data)
    }
    getNews()
},[category,search])
console.log(news)
  return (
<div className='mt-6'>
      <h3 className='text-md font-semibold mb-4'>Search News</h3>
  <div  className='sm:flex justify-between items-center space-y-3 sm:space-y-0'>
    <div className=' w-full md:w-1/2 lg:w-3/4 space-y-3 '>
      {/* search */}
      
        <Input type="text" placeholder="search..." />
    </div>
    {/* category */}
    <div>
        <h5>Category Filter:</h5>
    </div>
  </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {
            news?.map((items)=><NewsCard key={items.id} item={items}/>)
        }
    </div>
</div>
  )
}

export default NewsList