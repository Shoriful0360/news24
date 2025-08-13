import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import bannerImg from "@/assets/newspaper.jpg"

function Banner() {
  return (
<div className='bg-slate-100 rounded-md '>
        <div className='grid xl:grid-cols-2 gap-4   lg:px-10 px-4  py-8 mt-10 '>
        {/* image */}
        <div>
          <Image src={bannerImg} alt='banner Image'  className='rounded-md lg:w-11/12 h-full xl:h-[500px] object-left '/>
        </div>
        {/* content */}
        <div className='flex flex-col space-y-6 justify-evenly'>
            <h3 className='text-2xl font-semibold underline'>Technology</h3>
            <h2 className='md:text-3xl font-bold'>OpenAI Is Growing Fast and Burning Through Piles of Money</h2>
            <p className='text-justify'>
           "OpenAI, the creator of ChatGPT, is experiencing explosive growth, rapidly expanding its user base, revenue, and technological reach — but at an equally staggering financial cost. The company’s annualized revenue has surged to around $12 billion in 2025, fueled by over 700 million weekly active ChatGPT users, yet it continues to burn through billions in pursuit of dominance in the AI race. Massive funding rounds, including a record-breaking $40 billion raise earlier this year that pushed its valuation to $300 billion, have allowed OpenAI to scale infrastructure, train more advanced models, and compete head-to-head with tech giants like Google and Anthropic. However, this rapid scaling comes with enormous operational expenses, from the immense computing power required to run AI systems to the salaries of top-tier researchers."
            </p>
            <Button className={''}>Read More</Button>
        </div>
    </div>
</div>
  )
}

export default Banner