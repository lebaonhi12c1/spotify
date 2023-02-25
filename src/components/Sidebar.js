import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import {FiImage} from 'react-icons/fi'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {FiHeadphones} from 'react-icons/fi'
function Sidebar() {
    const [active, setactive] = useState('Home')
    const handleSetActive = e=>{
        setactive(e.target.innerText)
    }
    console.log(active)
    return (
        <div className='flex flex-col gap-4 bg-[#191726] h-full'>
            <div className='h-[80px] pt-4'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Beats_Music_logo.svg/1023px-Beats_Music_logo.svg.png" alt="" className='w-full h-full object-contain' />
            </div>
            <ul>
                <li>
                    <Link href={'/'} className={` flex gap-4 items-center p-2 hover:bg-blue-500 hover:text-black ${active === 'Home' ? 'bg-blue-500 text-black' : 'text-gray-300'}`} onClick={e=>handleSetActive(e)}>
                        <AiOutlineHome/>
                        <span>
                            Home
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className={` flex gap-4 items-center p-2 hover:bg-blue-500 hover:text-black ${active === 'Around You' ? 'bg-blue-500 text-black' : 'text-gray-300'}`} onClick={e=>handleSetActive(e)}>
                        <FiImage/>
                        <span>
                            Around You
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className={` flex gap-4 items-center p-2 hover:bg-blue-500 hover:text-black ${active === 'Top Artists' ? 'bg-blue-500 text-black' : 'text-gray-300'}`} onClick={e=>handleSetActive(e)}>
                        <HiOutlineUserGroup/>
                        <span>
                            Top Artists
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className={` flex gap-4 items-center p-2 hover:bg-blue-500 hover:text-black ${active === 'Top Charts' ? 'bg-blue-500 text-black' : 'text-gray-300'}`} onClick={e=>handleSetActive(e)}>
                        <FiHeadphones/>
                        <span>
                            Top Charts
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;