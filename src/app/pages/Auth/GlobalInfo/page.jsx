'use client'
import Input from '@/app/Components/Inputs/Input';
import { Context_API } from '@/app/context/Context_API';
import Link from 'next/link';
import React, { useContext, useState } from 'react'

const page = () => {
    const {
        Class, setClass,
        Section, setSection,
        governorate, setGovernorate,
        city, setCity,
        schoolType, setSchoolType,
        schoolName, setSetschoolName,
        secundLang, setSetsecundLang,
        facebookLink, setfacebookLink,
        birthDate, setBirthDate,
    } = useContext(Context_API);

    const [error, seterror] = useState('');
    const [Loading, setLoading] = useState(false);

    return (
        <div className='h-[calc(100%-80px)] w-full flex items-start justify-center py-5 overflow-auto'>
            <form action="" className='max-w-[90%] w-[400px] flex flex-col items-center justify-start gap-5 p-5'>
                <h1 className='md:text-3xl text-xl font-bold uppercase text-[#3483b9]'>Global information</h1>
                <div className="w-full h-fit">
                    <Input type="select" placeholder="class" value={Class} onChange={({ target }) => setClass(target.value)} label={"choose your class"} options={[{ name: 'fares', value: 'fares' }, { name: 'fares', value: 'fares' },]} />
                    <Input type="select" placeholder="section" value={Section} onChange={({ target }) => setSection(target.value)} label={"choose your section"} options={[{ name: 'fares', value: 'fares' }, { name: 'fares', value: 'fares' },]} />
                    <Input type="select" placeholder="governorate" value={governorate} onChange={({ target }) => setGovernorate(target.value)} label={"choose your governorate"} options={[{ name: 'fares', value: 'fares' }, { name: 'fares', value: 'fares' },]} />
                    <Input type="select" placeholder="city" value={city} onChange={({ target }) => setCity(target.value)} label={"choose your city"} options={[{ name: 'fares', value: 'fares' }, { name: 'fares', value: 'fares' },]} />
                    <Input type="select" placeholder="schoolType" value={schoolType} onChange={({ target }) => setSchoolType(target.value)} label={"choose your school type"} options={[{ name: 'fares', value: 'fares' }, { name: 'fares', value: 'fares' },]} />
                    <Input type="text" placeholder="school" value={schoolName} onChange={({ target }) => setSetschoolName(target.value)} label={"school name"} />
                    <Input type="select" placeholder="lang" value={secundLang} onChange={({ target }) => setSetsecundLang(target.value)} label={"choose your secund language"} options={[{ name: 'fares', value: 'fares' }, { name: 'fares', value: 'fares' },]} />
                    <Input type="text" placeholder="facebook" value={facebookLink} onChange={({ target }) => setfacebookLink(target.value)} label={"facebook link"} />
                    <Input
                        label="Date of Birth"
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                    />
                </div>
                {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
                <div className="flex items-center justify-center gap-3 w-full">
                    <Link href={'/pages/Auth/UserData'} className="relative flex items-center justify-center h-[50px]  w-full border bg-[#3483b9] text-white font-bold rounded-sm cursor-pointer uppercase">
                        last
                    </Link>
                    <Link href={"/pages/Auth/ParentData"} className="relative flex items-center justify-center h-[50px]  w-full border bg-[#3483b9] text-white font-bold rounded-sm cursor-pointer uppercase">
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