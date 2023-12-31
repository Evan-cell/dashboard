import React from 'react'
import {BsPersonFill,BsThreeDotsVertical} from 'react-icons/bs'
import { data } from '@/data/Data'
import {motion} from 'framer-motion'
import { fadeIn } from '@/Variants'
function Customers() {
  return (
    <motion.div 
    variants={fadeIn('right',0.3)}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: false, amount: 0.7}}
    className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between p-4'>
            <h2>customers</h2>
            <h2>welcome back,kim</h2>
        </div>
        <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
        <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Name</span>
            <span className='sm:text-left text-right'>Email</span>
            <span className='hidden md:grid'>LastOrder</span>
            <span className='hidden sm:grid'>Method</span>
        </div>
        <ul>
        {data.map((order, id) => (
                <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                    <div className='flex items-center'>
                        <div className='bg-purple-100 p-3 rounded-lg'>
                            <BsPersonFill className='text-purple-800' />
                        </div>
                        <p className='pl-4'>{order.name.first + ' ' + order.name.last}</p>
                    </div>
                    <p className='text-gray-600 sm:text-left text-right'>{order.name.first}@gmail.com</p>
                    <p className='hidden md:flex'>{order.date}</p>
                    <div className='sm:flex hidden justify-between items-center'>
                        <p>{order.method}</p>
                        <BsThreeDotsVertical />
                    </div>
                </li>
            ))}
          </ul>
        </div>
        </div>
    </motion.div>
  )
}

export default Customers