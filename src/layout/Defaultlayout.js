import React from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import TopCharts from '@/components/TopCharts';
function Defaultlayout({children}) {
    return (
        <div className='grid grid-cols-6 gap-4 fixed top-0 left-0 right-0 bottom-0 sm:grid-cols-1 bg-gradient-to-br from-[#191726] to-[#111563] text-gray-300 sm:p-2'>
            <div>
                <Sidebar/>
            </div>
            <div className="col-span-3">
                <Navbar/>
                <div className='overflow-y-auto h-[100vh]'>
                    {children}
                </div>
            </div>
            <div className="col-span-2">
                <TopCharts/>
            </div>
        </div>
    );
}

export default Defaultlayout;