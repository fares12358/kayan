'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Input from '../Inputs/Input';

const UserData = ({ number }) => {
  const [phone, setPhone] = useState('');
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, seterror] = useState('');
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setPhone(number);
    return () => {
    }
  }, [number])
  
  return (
    <div className='h-[calc(100%-80px)] w-full flex items-start justify-center py-5 overflow-auto'>
      <form action="" className='max-w-[90%] w-[400px] flex flex-col items-center justify-start gap-5 p-5'>
        <h1 className='text-3xl font-bold uppercase text-[#3483b9]'>Create Account</h1>
        <div className="w-full h-fit">
          <Input type="text" placeholder="0000000" value={phone} onChange={({ target }) => setPhone(target.value)} label={"Phone"} />
          <Input type="text" placeholder="fares" value={Name} onChange={({ target }) => setName(target.value)} label={"Name"} />
          <Input type="email" placeholder="fares@example.com" value={email} onChange={({ target }) => setEmail(target.value)} label={"Email"} />
          <Input type="text" placeholder="fares@example.com" value={username} onChange={({ target }) => setUsername(target.value)} label={"Username"} />
          <Input type="password" placeholder="Min 8 Characters" value={password} onChange={({ target }) => setPassword(target.value)} label={"Password"} />
        </div>
        {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
        <button type='submit' className={`${Loading ? "relative flex items-center justify-center h-[50px]  w-full border bg-slate-100/50 border-slate-300 rounded-sm" : "relative flex items-center justify-center h-[50px]  w-full border bg-[#3483b9] text-white font-bold rounded-sm cursor-pointer"}`}>
          {
            Loading ?
              'Loading...'
              :
              'SIGNUP'
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

export default UserData