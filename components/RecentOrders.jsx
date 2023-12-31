import React from 'react'
import { data } from '@/data/Data'
import {FaShoppingBag} from 'react-icons/fa'
import {motion} from 'framer-motion'
import { fadeIn } from '@/Variants'
function RecentOrders() {
  return (
    <motion.div 
    variants={fadeIn('left',0.3)}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: false, amount: 0.7}}
    className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
        <h1>RecentOrders</h1>
        <ul>
            {data.map((order, id)=>(
                <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
                    <div className='bg-purple-100 rounded-lg p-3'>
                        <FaShoppingBag className='text-purple-800' />
                        </div>
                        <div >
                            <p className='text-gray-800 text-bold'>ksh {order.total}</p>
                            <p className='text-gray-400 text-sm'>{order.name.first}</p>
                        </div>
                        <p className='lg:flex md:hidden absolute right-6 text-sm'>{order.date}</p>
                </li>
            ))}
        </ul>
    </motion.div>
  )
}

export default RecentOrders