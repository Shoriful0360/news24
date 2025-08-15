import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import newImage1 from '@/assets/news1.jpg'

function NewsCard({item}) {
  const{id,title,imageUrl,description}=item || {}
  return (
 
    <div className='mt-10 grid  gap-3'>
        <div className=" border p-4 space-y-3 flex flex-col rounded-md shadow-md">
<figure className="relative w-full h-56"> {/* container height সেট করা হচ্ছে */}
  <Image
    src={imageUrl}
    alt={title}
    fill
    className="rounded-md object-cover hover:scale-105 transition-all duration-300"
  />
</figure>

  <div className=" space-y-4 flex flex-col flex-1">
    <h2 className="font-semibold text-xl flex-1">{title}</h2>
    <p className='flex-1'>{description.substring(0,76)}...</p>
   
      <Button>Buy Now</Button>
   
  </div>
</div>
    </div>
  
  )
}

export default NewsCard