import React from 'react';
import PhotoCard from './PhotoCard';

const TopGanaration = async() => {
    const res = await fetch(`https://pixgen-indol.vercel.app/data.json`)
    const data = await res.json()
    const photos = data.slice(0,8)

    console.log(photos);
    return (
        <div className='max-w-6xl mx-auto'>
           <h1 className='text-2xl font-bold mt-5'>Top Ganaration</h1> 

           <div className='grid gap-2 grid-cols-4 mt-5'>
            {
                photos.map(photo => <PhotoCard key={photo.id} photo={photo} />
                    
                )
            }
           </div>
        </div>
    );
};

export default TopGanaration;