import { useQuery } from '@tanstack/react-query'
import {
   CategoryScale,
   Chart as ChartJS,
   Legend,
   LineElement,
   LinearScale,
   PointElement,
   Title,
   Tooltip,
} from 'chart.js'
import React, { useRef, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Link, useParams } from 'react-router-dom'
import coinApi from '../api/coinApi'
import { defaultCoinIcon } from '../assets/img/CoinItem'
import { loadingIcon } from '../assets/img'

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
)

function CoinDetail() {
   const coinId = useParams().coinId
   const iconRef = useRef()

   const [period, setPeriod] = useState('24h')

   const {
      data: coinDetailData,
      isLoading: coinDetailLoading,
      isError,
      isFetching: coinDetailFetching,
      isFetched,
   } = useQuery(['coinDetail', coinId], () => coinApi.getCoinDetail(coinId), {
      refetchOnWindowFocus: false,
   })

   const { data: coinHistoryData } = useQuery(
      ['coinHistory', coinId, period],
      () => coinApi.getCoinHistory(period, coinId),
      {
         refetchOnWindowFocus: false,
      }
   )

   const coinDetail = coinDetailData?.data?.coin
   const coinHistory = coinHistoryData?.data?.chart

   const periodList = ['24h', '1w', '1m', '3m', '6m', '1y', 'all']

   const options = {
      responsive: true,
      plugins: {
         legend: {
            display: false,
         },
      },
      scales: {
         x: {
            ticks: {
               maxTicksLimit: 8,
               color: '#808080',
            },
         },
         y: {
            ticks: {
               color: '#ffffff',
            },
         },
      },
   }

   const tranformLabel = () => {
      if (period === '24h') {
         return coinHistory?.map((item) =>
            new Date(item[0] * 1000).toLocaleTimeString()
         )
      }
      if (period === '1w') {
         return coinHistory?.map((item) =>
            new Date(item[0] * 1000).toLocaleDateString()
         )
      }
      if (period === '1m') {
         return coinHistory?.map((item) =>
            new Date(item[0] * 1000).toLocaleDateString('vi-VN')
         )
      }
      if (period === '3m') {
         return coinHistory?.map((item) =>
            new Date(item[0] * 1000).toLocaleDateString('vi-VN')
         )
      }
      if (period === '6m') {
         return coinHistory?.map((item) =>
            new Date(item[0] * 1000).toLocaleDateString('vi-VN')
         )
      }
      if (period === '1y') {
         return coinHistory?.map((item) =>
            new Date(item[0] * 1000).toLocaleDateString('vi-VN')
         )
      }
      if (period === 'all') {
         return coinHistory?.map((item) =>
            new Date(item[0] * 1000).toLocaleDateString('vi-VN')
         )
      }
   }

   const tranformData = () => {
      return {
         labels: tranformLabel(),
         datasets: [
            {
               label: 'Price',
               borderColor: '#ff9332',
               data: coinHistory?.map((item) => item[1]),
            },
         ],
      }
   }

   if (coinDetailLoading || coinDetailFetching) {
      return (
         <div className="min-h-[calc(100vh-140px-396px)] flex items-center justify-center">
            <img
               src={loadingIcon}
               alt="loading"
               className="animate-spin duration-300"
            />
         </div>
      )
   }

   if (isFetched && !coinDetail) {
      return (
         <div className="min-h-[calc(100vh-140px-396px)]">
            Không có dữ liệu về đồng coin này
         </div>
      )
   }

   return (
      <div>
         <div className="text-[22px] my-[50px] ">
            <Link className="hover:text-hoverPrimary" to={'/'}>
               Home
            </Link>
            <span className="mx-7">/</span>
            <span>{coinDetail.name}</span>
         </div>

         <span className="px-4 bg-buttonPrimary py-1 rounded-lg">
            Rank #{coinDetail.rank}
         </span>

         <div className="my-5 flex items-center">
            <img
               ref={iconRef}
               className="w-[50px] h-[50px] mr-3"
               src={coinDetail.icon}
               alt="coin-icon"
               onError={() =>
                  iconRef.current.setAttribute('src', defaultCoinIcon)
               }
            />
            <span className=" text-[32px]">
               {coinDetail.name}
               <span className="ml-5 text-xl">{coinDetail.symbol}</span>
            </span>
         </div>

         <div className="flex items-center">
            <span className="text-[40px] mr-6">
               $
               {coinDetail.price?.toLocaleString('en-US', {
                  maximumFractionDigits: coinDetail.price < 1 ? 6 : 2,
               })}
            </span>

            <span
               className={`bg-[#30215A]  rounded-lg py-1 px-[6px] ${
                  coinDetail.priceChange1d < 0
                     ? 'text-[#ff0000]'
                     : 'text-[#00ff29] '
               }`}
            >
               {`${coinDetail.priceChange1d}%`}
            </span>
         </div>

         <p className="mt-12 mb-10 text-[32px]">
            {coinDetail.name} Price Chart ({coinDetail.symbol})
         </p>

         <div className="w-100%">
            <Line options={options} data={tranformData()} />
         </div>

         <div className="flex justify-center gap-6 h-[65px]">
            {periodList.map((item, index) => (
               <button
                  className={`${
                     item === period ? 'text-white' : 'text-gray-700'
                  } text-xl uppercase`}
                  key={index}
                  onClick={() => setPeriod(item)}
               >
                  {item}
               </button>
            ))}
         </div>
      </div>
   )
}

export default CoinDetail
