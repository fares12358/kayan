'use client'
import React, { useState, useRef, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { Context_API } from '@/app/context/Context_API';

const OTPinput = ({ length = 6 }) => {
  const { OTPphone,setOTPPhone} = useContext(Context_API);

  const [otp, setOTP] = useState(Array(length).fill(''));
  const inputsRef = useRef([]);
  const router = useRouter();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return;

    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    const joinedOTP = newOTP.join('');
    if (joinedOTP.length === length && !newOTP.includes('')) {
      console.log('OTP is:', joinedOTP);
      router.push(`/pages/Auth/UserData`);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center h-[calc(100%-80px)] w-full">
      <h3 className='text-xl font-bold'>
        OTP Verification
      </h3>
      <div className="flex gap-2 justify-center">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => inputsRef.current[index] = el}
            type="tel"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-10 h-12 border border-gray-300 rounded text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ))}
      </div>
    </div>
  );
};

export default OTPinput;
