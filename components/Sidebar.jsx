import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {RxSketchLogo,RxDashboard,RxPerson,} from 'react-icons/rx'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'
function Sidebar({children}) {
  return (
    <div className='flex'>
        <div className='fixed w-20 p-4 h-screen bg-white border-r-[1px] flex flex-col'>
            <div className='flex flex-col items-center'>
                <Link href='/'>
                    <div className='bg-purple-800 p-3 text-white rounded-lg inline-block'>
                        <RxSketchLogo size={20}/>
                    </div>
                    <span className="boarder-b-[1px] border-gray-200 w-full p-2"></span>
                </Link>
                <Link href='/'>
                    <div className='bg-gray-100 p-3 hover:bg-gray-200 cursor-pointer my-4  rounded-lg inline-block'>
                        <RxDashboard size={20}/>
                    </div>
                    <span className="boarder-b-[1px] border-gray-200 w-full p-2"></span>
                </Link>
                <Link href='/Customers'>
                    <div className='bg-gray-100 p-3 hover:bg-gray-200 cursor-pointer my-4  rounded-lg inline-block'>
                        <RxPerson size={20}/>
                    </div>
                    <span className="boarder-b-[1px] border-gray-200 w-full p-2"></span>
                </Link>
                <Link href='/Orders'>
                    <div className='bg-gray-100 p-3 hover:bg-gray-200 cursor-pointer my-4  rounded-lg inline-block'>
                        <HiOutlineShoppingCart size={20}/>
                    </div>
                    <span className="boarder-b-[1px] border-gray-200 w-full p-2"></span>
                </Link>
                <Link href='/'>
                    <div className='bg-gray-100 p-3 hover:bg-gray-200 cursor-pointer my-4  rounded-lg inline-block'>
                        <FiSettings size={20}/>
                    </div>
                    <span className="boarder-b-[1px] border-gray-200 w-full p-2"></span>
                </Link>
            </div>
        </div>
        <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar