import React, { useState } from 'react';
import {BsPauseCircle} from 'react-icons/bs'
import {BsPlayCircle} from 'react-icons/bs'
function MusicCard(props) {
    const [hover, sethover] = useState(false)
    console.log(hover)
    return (
        <div className='p-4 bg-[#202261] rounded-md flex flex-col gap-5'>
           <div className='relative duration-200' onMouseEnter={()=>sethover(true)} onMouseLeave={()=>sethover(false)}>
             <img src="https://images.tcdn.com.br/img/img_prod/592646/luminaria_sharingan_1345_2_1a80ed019b808de7517b52b739340bdf.jpg" alt="" />
            {hover && (
                 <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                    {!true ? <BsPauseCircle fontSize={'40px'}/>: <BsPlayCircle fontSize={'40px'}/>}
                </div>
            )}
           </div>
            <div className='flex flex-col gap-2'>
                <div className=' font-bold'>title</div>
                <div>author</div>
            </div>
        </div>
    );
}

export default MusicCard;