import React from 'react'
import LogOutBtn from './LogOut-Btn'
const DashboardHeading = () => {
    return (
        <div className='flex justify-between'>
            <div className='w-full h-[66px] bg-[#08AD36]'>
                <h1 className='font-inter text-[#FFFFFF] font-bold pl-10 pt-[20px]'>Layanan Pendaftaran & Antrian
                    Puskesmas</h1>
            </div>

            <LogOutBtn />
        </div>
    )
}

export default DashboardHeading