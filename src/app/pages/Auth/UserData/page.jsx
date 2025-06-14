'use client'
import Input from '@/app/Components/Inputs/Input';
import { Context_API } from '@/app/context/Context_API';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'

const page = () => {
    const {
        OTPphone, setOTPPhone,
        phone, setPhone,
        FirstName, setFirstName,
        SecundName, setSecundName,
        ThirdName, setThirdName,
        LastName, setLastName,
        email, setEmail,
        password, setPassword,
    } = useContext(Context_API);

    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, seterror] = useState('');
    const [Loading, setLoading] = useState(false);


    return (
        <div className='h-[calc(100%-80px)] w-full flex items-start justify-center py-5 overflow-auto'>
            <form action="" className='max-w-[90%] w-[400px] flex flex-col items-center justify-start gap-5 p-5'>
                <h1 className='md:text-3xl text-xl font-bold uppercase text-[#3483b9]'>Student Data</h1>
                <div className="w-full h-fit">
                    <Input readOnly={true} type="tel" placeholder="00000000000" value={phone} onChange={({ target }) => setPhone(target.value)} label={"Phone"} edite={true} />
                    <Input readOnly={false} type="text" placeholder="Fares" value={FirstName} onChange={({ target }) => setFirstName(target.value)} label={"First Name"} />
                    <Input readOnly={false} type="text" placeholder="Mohamed" value={SecundName} onChange={({ target }) => setSecundName(target.value)} label={"Secund Name"} />
                    <Input readOnly={false} type="text" placeholder="Mostafa" value={ThirdName} onChange={({ target }) => setThirdName(target.value)} label={"Third Name"} />
                    <Input readOnly={false} type="text" placeholder="Hatia" value={LastName} onChange={({ target }) => setLastName(target.value)} label={"Last Name"} />
                    <Input readOnly={false} type="email" placeholder="fares@example.com" value={email} onChange={({ target }) => setEmail(target.value)} label={"Email"} />
                    <Input readOnly={false} type="password" placeholder="Min 8 Characters" value={password} onChange={({ target }) => setPassword(target.value)} label={"Password"} />
                    <Input readOnly={false} type="password" placeholder="Confirm password" value={confirmPassword} onChange={({ target }) => setConfirmPassword(target.value)} label={"Confirm Password"} />
                </div>
                {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
                <Link href={'/pages/Auth/GlobalInfo'} className="relative flex items-center justify-center h-[50px]  w-full border bg-[#3483b9] text-white font-bold rounded-sm cursor-pointer">
                        NEXT
                </Link>
                <p className='text-[13px] text-slate-800 mt-3'>
                    Already have an Account?
                    <Link className='font-medium text-[#3483b9] underline ml-2' href={"/pages/Auth/Login"}>Login</Link>
                </p>
            </form>
        </div>
    )
}

export default page