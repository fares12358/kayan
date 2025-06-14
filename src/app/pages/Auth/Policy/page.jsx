'use client'
import Link from 'next/link';
import React, { useContext, useState } from 'react'

const page = () => {
    const [policy, setPolicy] = useState(false)
    const [error, seterror] = useState('');
    const [Loading, setLoading] = useState(false);

    return (
        <div className='h-[calc(100%-80px)] w-full flex items-center justify-center py-5 overflow-auto'>
            <form action="" className='max-w-[90%] w-[400px] flex flex-col items-center justify-start gap-5 p-5'>
                <h1 className='md:text-3xl text-xl font-bold uppercase text-[#3483b9] my-3'>الشروط والاحكام</h1>
                <div className="w-full h-fit" dir='rtl'>
                    <div className="flex items-start justify-center flex-col gap-2">
                        <h3 className='text-xl font-bold'>
                            التسجيل / الحضور
                        </h3>
                        <ul className="text-sm text-slate-800 list-disc">
                            <li>
                                يلتزم الطالب بتسجيل بياناته الصحيحة دون نقصان أو خطأ
                            </li>
                            <li>
                                يلتزم الطالب بالقواعد الموضوعة من خلال المنصة حتى يتسنى له التكلمه معنا والحضور
                            </li>
                            <li>
                                عدم الغياب أكثر من محاضرة حتى لا يتعرض الطالب للحظر
                            </li>
                        </ul>
                        <h3 className='text-xl font-bold'>
                            المحاضرات / الباقات
                        </h3>
                        <ul className="text-sm text-slate-800 list-disc">
                            <li>
                                يلتزم كل طالب بأن يتصفح الموقع والمحاضرات من حسابه الشخصي المسجل
                            </li>
                            <li>
                                يلتزم الطالب بأن يشاهد المحاضرات في وقتها
                            </li>
                            <li>
                                يرجى العلم أن الاشتراك في الباقات لا يسترد مرة أخرى
                            </li>
                        </ul>
                        <h3 className='text-xl font-bold'>
                            الأكواد والمحفظة
                        </h3>
                        <ul className="text-sm text-slate-800 list-disc">
                            <li>
                                يلتزم الطالب بعدم وجود أكواد فائضة عن احتياجه معه لأنه لا يوجد مرتجع للأكواد
                            </li>
                            <li>
                                يلتزم الطالب بعدم شحن المحفظة بمبالغ كبيرة لأنه لا يوجد استرداد للمحفظة
                            </li>
                        </ul>
                        <h3 className='text-xl font-bold'>
                            شروط عامة
                        </h3>
                        <ul className="text-sm text-slate-800 list-disc">
                            <li>
                                يلتزم كل طالب بعدم تصوير أو تسريب المحاضرات المصورة على الموقع
                            </li>
                            <li>
                                يلتزم الطالب باحترام المدرسين وعدم استخدام المادة العلمية استخدام سيء
                            </li>
                        </ul>

                    </div>
                    <div className="flex items-center gap-2 my-5">
                        <input
                            type="checkbox"
                            checked={policy}
                            onChange={(e) => setPolicy(e.target.value)}
                            className="w-4 h-4 text-[#3483b9] border-slate-300 rounded"
                        />
                        <span className="text-sm text-slate-800">
                            انا اوافق على الشروط و الاحكام
                        </span>
                    </div>
                </div>
                {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
                <button className='relative flex items-center justify-center h-[50px]  w-full border bg-[#3483b9] text-white font-bold rounded-sm cursor-pointer uppercase'>create account</button>
                <p className='text-[13px] text-slate-800 mt-3'>
                    Already have an Account?
                    <Link className='font-medium text-[#3483b9] underline ml-2' href={"/pages/Auth/Login"}>Login</Link>
                </p>
            </form>
        </div>
    )
}

export default page