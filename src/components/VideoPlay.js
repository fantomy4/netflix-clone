import React from 'react'
import useFetchDetails from '../hooks/useFetchDetails';

const VideoPlay = ({ data, close, media_type }) => {
  const { data: videoData } = useFetchDetails(`/${media_type}/${data?.id}/videos`);

  return (
    <section 
      className='fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex justify-center items-center' 
      onClick={close}
    > 
      <div 
        className='bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded relative' 
        onClick={(e) => e.stopPropagation()}
      >

        <iframe
          src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}
          className='w-full h-full'
        />
      </div>
    </section>
  );
}

export default VideoPlay;
