/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
export default function StartPage() {
  const router = useRouter();
  // const { setTg } = useTelegram();
  // useEffect(() => {
  //   function initTg() {
  //     if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
  //       axios.post('/api/auth/validate-hash', { hash: window.Telegram.WebApp.initData })
  //         .then((response) => {
  //           if (response.status === 200) {
  //             setTg(window.Telegram.WebApp)
  //           }
  //         }).then(() =>
            router.push('/dashboard')
  //         )
  //     } else {
  //       setTimeout(initTg, 500);
  //     }
  //   }
  //   initTg();
  // }, []);
  return (<div className="grid h-screen place-content-center px-4" >
    <Loader2
      className={cn('my-28 h-16 w-16 text-primary/60 animate-spin')}
    />
  </div>)
}
