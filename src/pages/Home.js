import React from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import HorizontalScrollCard from '../components/HorizontalScrollCard'

const Home = () => {
  const trendingData = useSelector(state => state.netflixData.bannerData)
  return (
    <div>
      <BannerHome></BannerHome>
      <HorizontalScrollCard data={trendingData} heading={"Trending"}></HorizontalScrollCard>

      
    </div>
  )
}

export default Home
