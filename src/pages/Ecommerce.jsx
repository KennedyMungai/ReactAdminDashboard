import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Stacked, PieChart, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../context/ContextProvider'


const Ecommerce = () =>
{
    return (
        <div className='mt-12'>
            <div className="flex flex-wrap lg:flex-nowrap justify-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
                    <div className="flex justify-between items-center">
                        <p className='font-bold text-gray-400'>Earnings</p>
                        <p className='text-2xl'>$63,448.78</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecommerce