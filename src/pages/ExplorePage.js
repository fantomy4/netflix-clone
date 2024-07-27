import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
    window.addEventListener('scroll',handleScroll)
  },[])
  return (
    <div className='pt-16'>
      <div className='container mx-12'>
        <h3 className='capitalize text-lg font-semibold'>Popular {params.explore} show</h3>
      </div>
    </div>
  )
}

export default ExplorePage
