import React from 'react';
import videobg from '../../assets/videobg.mp4'

const YouTubeBackground = ({ children, videoId }) => {
  return (
    <div className='w-full  h-screen '>
        <video className='w-full h-full object-cover ' src={videobg} autoPlay={true} loop muted />
    </div>
  );
}

// export default YouTubeBackground;
