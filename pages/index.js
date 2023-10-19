import Barchat from '@/components/Barchat'
import Header from '@/components/Header'
import RecentOrders from '@/components/RecentOrders'
import TopCards from '@/components/TopCards'
import Image from 'next/image'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

export default function Home() {
  return (
    <main className='bg-gray-100 min-h-screen'>
    <Header />
    <TopCards />
    <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
      <Barchat />
      <RecentOrders />
    </div>
    <div className='flex justify-center items-center mb-2 bg-gray-200 p-3 rounded-lg  '>
      <AiOutlineCopyrightCircle />  
      <h3 className='font-bold text-gray-600'>Developer Evan Kimani@2023</h3>
    </div>
    </main>
  )
}
