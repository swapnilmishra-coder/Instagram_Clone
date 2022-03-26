import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtoms'

const Header = () => {

  const {data: session}:any = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();
  const signOute:any = signOut;
  const signIne:any = signIn;

  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className="mx-5 flex max-w-6xl justify-between lg:mx-auto">
        <div onClick={()=>router.push("/")} className="relative hidden w-24 cursor-pointer lg:inline-grid">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div onClick={()=>router.push("/")} className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3 ">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className=" h-5 w-5 text-gray-500" />
            </div>
            <input
              className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={()=>router.push("/")} className="navBtn" />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />
          { session ? (
          <>
            <div className="navBtn relative">
              <PaperAirplaneIcon className="navBtn rotate-45" />
              <div className="absolute -top-1 -right-2 flex w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
                3
              </div>
            </div>
            <PlusCircleIcon onClick={()=>setOpen(true)} className="navBtn" />
            <UserGroupIcon className="navBtn" />
            <HeartIcon className="navBtn" />
            <img
              onClick={signOute}
              src={session?.user?.image}
              alt="profile pic"
              className="h-10 w-10 cursor-pointer rounded-full"
            />
          </>
          ):(
            <button onClick={signIne}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
