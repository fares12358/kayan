'use client'
import React, { useContext } from 'react'
import { Context_API } from '../context/Context_API';
import Link from 'next/link';

const Nav = () => {
    const { isOpenMenu, setIsOpenMenu, isLogin } = useContext(Context_API);
    const handleOpenMenu = (e) => {
        e.preventDefault()
        setIsOpenMenu(!isOpenMenu);
    }
    return (
        <nav className='w-full h-[80px] flex items-center justify-between mx-auto  container relative px-4'>
            <div className="flex items-center justify-center ">
                <img src="/image/image.png" alt="logo" className='w-[50px] h-[50px] md:w-[60px] md:h-[60px]' />
                <h1 className='logo font-bold md:text-3xl text-2xl text-[#3483b9]'>Kayan</h1>
            </div>

            {
                !isLogin ?
                    <Link href="/pages/Auth/Login" className='bg-[#3483b9] text-white md:px-6 px-4 py-2 rounded-lg font-medium cursor-pointer'>Login</Link>
                    :
                    <>
                        <button className="menu-btn md:hidden block" onClick={handleOpenMenu}>
                            {
                                isOpenMenu ?
                                    <img src="/svg/close-bold-svgrepo-com.svg" alt="close" className='w-[25px] h-[25px]' />
                                    :
                                    <img src="/svg/menu-svgrepo-com.svg" alt="menu" className='w-[25px] h-[25px]' />
                            }

                        </button>
                        
                        <div className="link-list md:flex hidden items-center justify-center gap-5 font-bold text-lg text-[#3483b9]">
                            <Link href={'/'}>Home</Link>
                            <Link href={'/'}>Aboute</Link>
                            <Link href={'/'}>Contact</Link>
                        </div>
                    </>

            }
        </nav>
    )
}

export default Nav