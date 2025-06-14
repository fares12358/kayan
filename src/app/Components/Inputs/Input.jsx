'use client';
import { Context_API } from '@/app/context/Context_API';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, label, placeholder, type, readOnly, edite, options }) => {
    const { OTPphone, setOTPPhone, } = useContext(Context_API);
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleEdite = (e) => {
        e.preventDefault();
        setOTPPhone('');
        router.push('/pages/Auth/Signup');
    }

    return (
        <div className='flex flex-col'>
            <div className="flex items-center justify-between">
                <label htmlFor="" className='text-[14px] font-medium text-slate-800'>{label}</label>
                {edite && <button className='text-[#3483b9] text-sm underline cursor-pointer' onClick={handleEdite}>Edite</button>}
            </div>
            
            {type === 'select' ? (

                <select
                    id={placeholder}
                    name={placeholder}
                    value={value}
                    onChange={(e) => onChange(e)}
                    className="w-full flex justify-between gap-3 text-sm text-black bg-slate-100/50 rounded px-4 py-3 mb-4 mt-3 border border-slate-300 outline-none"
                >
                    <option className='bg-white text-black hover:bg-[#3483b9] py-2 ' value="">-- Select an option --</option>
                    {
                        options?.map((option, index) => (
                            <option className='bg-white text-black hover:bg-[#3483b9] py-2 ' key={index} value={option.value}>{option.name}</option>
                        ))
                    }
                </select>
            )
                :
                (
                    <div className=" w-full flex justify-between gap-3 text-sm text-black bg-slate-100/50 rounded px-4 py-3 mb-4 mt-3 border border-slate-300 outline-none">
                        <input
                            type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                            placeholder={placeholder}
                            className='w-full bg-transparent outline-none'
                            value={value}
                            onChange={(e) => onChange(e)}
                            readOnly={readOnly}
                        />
                        {type === 'password' && (
                            <>
                                {showPassword ? (
                                    <FaRegEye size={22} className='text-primary cursor-pointer' onClick={() => toggleShowPassword()}
                                    />
                                ) : (
                                    <FaRegEyeSlash size={22} className='text-slate-400 cursor-pointer' onClick={() => toggleShowPassword()}
                                    />
                                )}
                            </>
                        )}
                    </div>
                )}
        </div>
    )
}

export default Input