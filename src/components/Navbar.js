import React from 'react';
import {VscSearch} from 'react-icons/vsc'
import {HiOutlineViewList} from 'react-icons/hi'
function Navbar(props) {
    return (
        <div className=' h-[80px] flex items-center justify-between'>
            <div className='flex items-center'>
                <div className='flex items-center gap-4'>
                    <VscSearch fontSize={'24px'}/>
                    <input type="search" className=' bg-transparent text-gray-300 px-2 focus-visible:outline-none' placeholder='Search your song...' />
                </div>
            </div>
            <div className='hidden sm:block cursor-pointer'>
                <HiOutlineViewList fontSize={'24px'}/>
            </div>
        </div>
    );
}

export default Navbar;