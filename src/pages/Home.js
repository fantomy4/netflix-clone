import React, { useEffect, useState } from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import HorizontalScrollCard from '../components/HorizontalScrollCard'
import axios from 'axios'
import useFetch from '../hooks/useFetch'

const Home = () => {
  const trendingData = useSelector(state => state.netflixData.bannerData)
  const {data : nowPlayingData} = useFetch('/movie/now_playing')
  const {data : topRatedData} = useFetch('/movie/top_rated')
  const {data : popularTvShowData} = useFetch('/tv/popular')
  const {data : onTheAirShowData} = useFetch('/tv/on_the_air')

  return (
    <div>
      <BannerHome></BannerHome>
      <HorizontalScrollCard data={trendingData} heading={"Trending"} trending={true}></HorizontalScrollCard>
      <HorizontalScrollCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"}></HorizontalScrollCard>
      <HorizontalScrollCard data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"}></HorizontalScrollCard>
      <HorizontalScrollCard data={popularTvShowData} heading={"Popular TV Show"} media_type={"tv"}></HorizontalScrollCard>
      <HorizontalScrollCard data={onTheAirShowData} heading={"On The Air"} media_type={"tv"}></HorizontalScrollCard>

      
    </div>
  )
}

export default Home
