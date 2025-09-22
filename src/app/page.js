'use client';
import { useEffect, useState } from "react";
import Banner from '@/component/homePage/Banner';
import NewsCard from '@/component/homePage/NewsCard';

function useResponsiveCount() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setVisibleCount(4);
      } else {
        setVisibleCount(6);
      }
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return { visibleCount };
}

export default function HomePage() {

  const [news, setNews] = useState([]);
  const { visibleCount } = useResponsiveCount();

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error(err));
  }, []);
console.log('news',news)
  return (
    <div>
      <Banner />
      <div className='mt-10'>
        <h2 className='text-3xl font-bold'>Latest News</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
          {news.slice(0, visibleCount).map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}