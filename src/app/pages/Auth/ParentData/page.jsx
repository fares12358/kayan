'use client'
import Input from '@/app/Components/Inputs/Input';
import { Context_API } from '@/app/context/Context_API';
import Link from 'next/link';
import React, { useContext, useState } from 'react'

const page = () => {
    const {
        firstnumber, setFirstnumber,
        secundNumber, setsecundNumber,
    } = useContext(Context_API);

    const [error, seterror] = useState('');
    const [Loading, setLoading] = useState(false);

    return (
        <div className='h-[calc(100%-80px)] w-full flex items-center justify-center py-5 overflow-auto'>
            <form action="" className='max-w-[90%] w-[400px] flex flex-col items-center justify-start gap-5 p-5'>
                <h1 className='md:text-3xl text-xl font-bold uppercase text-[#3483b9]'>parent data</h1>
                <div className="w-full h-fit">
                    <Input type="tel" placeholder="father number" value={firstnumber} onChange={({ target }) => setFirstnumber(target.value)} label={"father number"} />
                    <Input type="tel" placeholder="mother number" value={secundNumber} onChange={({ target }) => setsecundNumber(target.value)} label={"mother number"} />
                </div>
                {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
                <div className="flex items-center justify-center gap-3 w-full">
                    <Link href={'/pages/Auth/GlobalInfo'} className="relative flex items-center justify-center h-[50px]  w-full border bg-[#3483b9] text-white font-bold rounded-sm cursor-pointer uppercase">
                        last
                    </Link>
                    <Link href={"/pages/Auth/PersonalId"} className="relative flex items-center justify-center h-[50px]  w-full border bg-[#3483b9] text-white font-bold rounded-sm cursor-pointer uppercase">
                        NEXT
                    </Link>
                </div>
                <p className='text-[13px] text-slate-800 mt-3'>
                    Already have an Account?
                    <Link className='font-medium text-[#3483b9] underline ml-2' href={"/pages/Auth/Login"}>Login</Link>
                </p>
            </form>
        </div>
    )
}

export default page