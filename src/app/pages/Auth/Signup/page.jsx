'use client'
import OTPinput from '@/app/Components/form/OTPinput';
import UserData from '@/app/Components/form/UserData';
import Input from '@/app/Components/Inputs/Input';
import { Context_API } from '@/app/context/Context_API';
import Link from 'next/link';
import React, { useContext, useState } from 'react'

const page = () => {
  const { OTPphone,setOTPPhone} = useContext(Context_API);
    const [phone, setPhone] = useState('');
    const [OTP, setOTP] = useState('');
    const [error, seterror] = useState('');
    const [Loading, setLoading] = useState(false);
    const [optMood, setOptMood] = useState(false);
    
    const handleOnsubmit=async(e)=>{
      e.preventDefault();
      if(!phone){return}
      setOTPPhone(phone);
      setOptMood(true);
    }

    if(optMood) return <OTPinput/>
    return (
      <div className='h-[calc(100%-80px)] w-full flex items-center justify-center py-5 overflow-auto'>
        <form onSubmit={handleOnsubmit} action="" className='max-w-[90%] w-[400px] flex flex-col items-center justify-start gap-5 p-5'>
          <h1 className='text-2xl font-bold uppercase text-[#3483b9]'>Creat Account</h1>
          <div className="w-full h-fit">  
            <Input type="tel" placeholder="0000000" value={phone} onChange={({ target }) => setPhone(target.value)} label={"Phone"}  />
          </div>
          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
          <button type='submit' className={`${Loading ? "relative flex items-center justify-center h-[50px]  w-full border bg-slate-100/50 border-slate-300 rounded-sm" : "relative flex items-center justify-center h-[50px]  w-full border bg-[#3483b9] text-white font-bold rounded-sm cursor-pointer"}`}>
            {
              Loading ?
              'Loading...'
                :
                'GET OTP'
            }
          </button>
          <p className='text-[13px] text-slate-800 mt-3'>
              Already have an Account?
              <Link className='font-medium text-[#3483b9] underline ml-2' href={"/pages/Auth/Login"}>Login</Link>
            </p>
        </form>
      </div>
    )
  }

export default page