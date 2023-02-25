import React from 'react';
import MusicCard from './MusicCard';

function MusicList(props) {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <MusicCard/>
            <MusicCard/>
            <MusicCard/>
        </div>
    );
}

export default MusicList;