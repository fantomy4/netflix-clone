import React from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import Card from '../components/Card'

const Home = () => {
  const trendingData = useSelector(state => state.netflixData.bannerData)
  return (
    <div>
      <BannerHome></BannerHome>

      <div className='container px-12 my-10'>
        <h2 className='text-xl lg:text-2xl font-bold mb-2'>Trending Show</h2>
        <div>
          {
            trendingData.map((data)=>{
              return(
                <Card key={data.id} data={data}></Card>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home
