"use client"
import { useParams } from 'next/navigation'
import React from 'react'

function NewsDetails() {
  const {id}=useParams()
  console.log(id)
  return (
    <div>
         <main className="max-w-4xl mx-auto py-8 px-6 flex flex-col gap-6">
        <article className="flex flex-col gap-4">
          {/* Headline */}
          <h1 className="text-4xl font-bold dark:text-white">
            Breaking News: Sample Headline
          </h1>

          {/* Author & Date */}
          <p className="text-gray-500 dark:text-gray-300 text-sm">
            By John Doe | Sep 19, 2025
          </p>

          {/* Featured Image */}
          <div className="relative w-full h-80">
            {/* <Image
              src="/news-image.jpg"
              alt="News Image"
              fill
              className="object-cover rounded-md"
            /> */}
          </div>

          {/* Article Body */}
          <div className="prose dark:prose-invert max-w-full">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              feugiat, sapien ut venenatis dictum, libero justo efficitur
              augue, sit amet euismod nulla odio eget erat.
            </p>
            <p>
              Curabitur non velit nec justo convallis tincidunt. Aliquam erat
              volutpat. Integer at est vitae augue fermentum tincidunt.
            </p>
            <blockquote>
              This is a highlighted quote or important statement in the news.
            </blockquote>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mt-4">
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700">
              World
            </span>
            <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700">
              Politics
            </span>
          </div>

          {/* Social Share (Example) */}
          <div className="flex gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Facebook</button>
            <button className="px-4 py-2 bg-blue-400 text-white rounded">Twitter</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded">Pinterest</button>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-6 px-6 mt-12 text-center">
        &copy; 2025 News24. All rights reserved.
      </footer>
    </div>
  )
}

export default NewsDetails