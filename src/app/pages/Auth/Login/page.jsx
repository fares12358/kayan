'use client';
import Input from '@/app/Components/Inputs/Input'
import { Context_API } from '@/app/context/Context_API';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'

const page = () => {
  const router = useRouter();
  const { isOpenMenu, setIsOpenMenu, isLogin,setIsLogin } = useContext(Context_API);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [error, seterror] = useState('');
  const [Loading, setLoading] = useState(false);

  const handleOnsubmit=(e)=>{
    e.preventDefault();
    setIsLogin(true);
    router.push('/');

  }
  return (
    <div className='h-[calc(100%-80px)] w-full flex items-center justify-center'>
      <form onSubmit={handleOnsubmit} className='max-w-[90%] w-[400px] flex flex-col items-center justify-start gap-5 p-5'>
        <h1 className='text-3xl font-bold uppercase text-[#3483b9]'>Login</h1>
        <div className="w-full h-fit">
          <Input type="text" placeholder="fares@example.com" value={username} onChange={({ target }) => setUsername(target.value)} label={"Username"} />
          <Input type="password" placeholder="Min 8 Characters" value={password} onChange={({ target }) => setPassword(target.value)} label={"Password"} />
        </div>
        {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
        <button type='submit' className={`${Loading ? "relative flex items-center justify-center h-[50px]  w-full border bg-slate-100/50 border-slate-300 rounded-sm" : "relative flex items-center justify-center h-[50px]  w-full border bg-[#3483b9] text-white font-bold rounded-sm cursor-pointer"}`}>
          {
            Loading ?
            'Loading...'
              :
              'LOGIN'
          }
        </button>
        <p className='text-[13px] text-slate-800 mt-3'>
            Don't have an account?
            <Link className='font-medium text-[#3483b9] underline ml-2' href={"/pages/Auth/Signup"}>SignUp</Link>
          </p>
      </form>
    </div>
  )
}

export default page