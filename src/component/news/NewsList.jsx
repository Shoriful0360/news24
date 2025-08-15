'use client'
import fetchNews from '@/lib/fetchNews';
import React, { useEffect, useState } from 'react'
import NewsCard from '../homePage/NewsCard';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
function NewsList() {
    const [news,setNews]=useState([]);
    const[search,setSearch]=useState("")
    const[category,setCategory]=useState("")

    const categoryNames=["Technology" ,"Transport","Flood","Scenery","Sports","Education","Business"]
useEffect(()=>{
    const getNews=async()=>{
        const data=await fetchNews()
        setNews(data)
    }
    getNews()
},[category,search])
console.log(search)
  return (
<div className='mt-6'>
      <h3 className='text-md font-semibold mb-4'>Search News</h3>
      {/* search and category field */}
  <div  className='sm:flex gap-6 justify-between items-center space-y-3 sm:space-y-0'>
    <div className=' w-full md:w-1/2 lg:w-3/4 space-y-3 '>
      {/* search */}
      
        <Input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="search..." />
    </div>
    {/* category */}
    <div className='flex space-x-2'>
        <h3 className='text-lg font-bold flex-shrink-0'>Category By Filter:</h3>
        <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select Category" />
  </SelectTrigger>

  <SelectContent>
      {
    categoryNames.map((item,index)=><SelectItem key={index} value={item}>{item}</SelectItem>)
  }
  </SelectContent>
</Select>
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