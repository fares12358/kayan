'use client'
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { Context_API } from './context/Context_API';

export default function Home() {
  const router = useRouter();
  const { isOpenMenu, setIsOpenMenu, isLogin } = useContext(Context_API);

  useEffect(() => {
    if (!isLogin) {
      router.push('/pages/Auth/Login');
    }
    return () => { }
  }, [isLogin, router],[])


  return (
    <div className="home w-full h-[calc(100%-80px)] mx-auto container">

    </div>
  );
}
