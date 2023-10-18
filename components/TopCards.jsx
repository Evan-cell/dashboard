import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '@/Variants'
function TopCards() {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <motion.div 
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7}}
        className='lg:col-span-2 col-span-1 flex justify-between w-full border p-4 rounded-lg bg-white'>
            <div className="flex flex-col w-full pb-4">
                <p className='text-2xl font-bold'>ksh 7846</p>
                <p className='text-gray-600'>Daily revenue</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+18%</span>
            </p>
        </motion.div>
        <motion.div 
                variants={fadeIn('right',0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7}}
        className='lg:col-span-2 col-span-1 flex justify-between w-full border p-4 rounded-lg bg-white'>
        <div className="flex flex-col w-full pb-4">
        <p className='text-2xl font-bold'>ksh 1346</p>
        <p className='text-gray-600'>YTD revenue</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+12%</span>
        </p>
        </motion.div>
        <motion.div 
                variants={fadeIn('right',0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7}}
        className='bg-white flex justify-between w-full border p-4 rounded-lg '>
        <div className="flex flex-col w-full pb-4">
        <p className='text-2xl font-bold'>ksh 3046</p>
        <p className='text-gray-600'>customers</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+28%</span>
        </p>
        </motion.div>
    </div>
  )
}

export default TopCards