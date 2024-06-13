import Image from 'next/image';
import React from 'react';

const Gallery = () => {
    return (
        <div>
            <h2>Gallery</h2>
            <Image src={'/next.svg'} fill alt='' />
        </div>
    );
};

export default Gallery;