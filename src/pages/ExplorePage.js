import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'

const ExplorePage = () => {
  const params = useParams()
  const [pageNo, setPageNo] = useState(1)
  const [data,setData] = useState([])
  const [totalPageNo,setTotalPageNo] = useState(0)

  console.log("params", params.explore);

  const fetchData = async()=> {
    try {
      const response = await axios.get(`/discover/${params.explore}`,{
        params : {
          page : pageNo
        }
      })
      setData((preve)=>{
        return[
          ...preve,
          ...response.data.results
        ]
      })
      setTotalPageNo(response.data.total_pages)
    } catch (error) {
      console.log('error', error);
    }
  }

  const handleScroll = ()=> {
    if((window.innerHeight + window.scrollY ) >= document.body.offsetHeight){
      setPageNo(preve => preve + 1)
    }
  }

  useEffect(()=>{
    fetchData()
  },[pageNo])

  useEffect(()=>{
    setPageNo(1)
    setData([])
    fetchData()
  },[params.explore])

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
  },[])
  return (
    <div className='py-16'>
      <div className='container px-1 mx-auto'>
        <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>Popular {params.explore} show</h3>
          <div className='grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-6'>
            {
              data.map((exploreData, index)=>{
                return(
                  <Card data={exploreData} key={exploreData.id+"exploreSection"} media_type={params.explore}></Card>
                )
              })
            }
          </div>
      </div>
    </div>
  )
}

export default ExplorePage
