import React,{useState,useEffect} from 'react'
import { Bar } from 'react-chartjs-2';
import {motion} from 'framer-motion'
import { fadeIn } from '@/Variants'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


function Barchat() {
    const [chartData, setChatData] = useState({
        datasets:[],
    });
    const [chartOptions,setChatOptions] = useState({});
    useEffect(()=>{
        setChatData({
            labels: ['mon','tue','wen','thurs','fri','sat','sun'],
            datasets: [
                {
                    label: 'sales ksh',
                    data: [18127,22201,19490,19938,24182,17842,22475],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgb(53,162,235,0.4)'
                }
            ]
        })
        setChatOptions({
            plugins:{
                legend:{
                    position: 'top'
                },
                title:{
                    display: true,
                    text: 'Daily Revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true,
        })
    })
  return (
    <>
    <motion.div 
            variants={fadeIn('down',0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7}}
    className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 rounded-lg bg-white'>
        <Bar data={chartData} options={chartOptions} />
    </motion.div>
    </>
  )
}

export default Barchat