import React from 'react'
import { useSelector } from 'react-redux'

const BannerHome = () => {
    const bannerData = useSelector(state => state.netflixData.bannerData)
    const imageURL = useSelector(state => state.netflixData.imageURL)

    console.log("banner Home", bannerData);
  return (
    <section className='w-full h-full'>
      <div className='flex min-h-full max-h-[95wh]'>
        {
            bannerData.map((data,index)=>{
                console.log("data", data);
                return(
                    <div className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative'>
                        <div className='w-full h-full'>
                            <img
                            src={imageURL + data.backdrop_path}
                            className='h-full w-full object-cover'
                            >
                            </img>
                        </div>

                        <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'>

                        </div>

                        <div className='container mx-auto absolute bottom-0 max-w-md'>
                            <h2 className='font-bold text-2xl'>{data.title}</h2>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </section>
  )
}

export default BannerHome
