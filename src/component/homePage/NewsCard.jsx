import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import newImage1 from '@/assets/news1.jpg'

function NewsCard() {
  return (
 
    <div className='mt-10 grid  gap-3'>
        <div className=" border p-4 space-y-3 rounded-md shadow-md">
  <figure className=''>
    <Image
      src={newImage1}
      alt="Choosing a dress"
      className='rounded-md hover:scale-105 cursor-pointer transition-all duration-300 '
    />
  </figure>
  <div className=" space-y-2">
    <h2 className="font-semibold text-xl">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
   
      <Button>Buy Now</Button>
   
  </div>
</div>
    </div>
  
  )
}

export default NewsCard