
import { MdCurrencyExchange } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";
import { SlBasket } from "react-icons/sl";

import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom';

const state = {
  series: [
    {
      name: 'Orders',
      data: [23, 45, 87, 69, 12, 50, 54, 76, 36, 28, 95, 12]

    },
    {
      name: 'Revenue',
      data: [15, 85, 43, 95, 45, 51, 72, 36, 63, 34, 48, 10]

    },
    {
      name: 'Salse',
      data: [80, 16, 99, 40, 75, 29, 62, 58, 95, 39, 21, 54]

    },


  ],
  options: {
    color: ["#181ee8", "#181ee8"],
    plotOptions: {
      radius: 30
    },
    chart: {
      background: "transparent",
      foreColor: '#d0d2d6'
    },
    dataLabels: {
      enabled: false
    },
    strock: {
      show: true,
      curve: ['smooth', 'straight', 'stepline'],
      lineCap: "butt",
      colors: "#f0f0f0",
      width: .5,
      dashArray: 0
    },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apl", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ]
    },
    legend: {
      position: "top"
    },
    responsive: [
      {
        breakpoint: 565,
        yaxis: {
          categories: [
            "Jan", "Feb", "Mar", "Apl", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
          ],
        },
        options: {
          plotOptions: {
            bar: {
              horizontal: true
            },
          },
          chart: {
            height: "550px"
          }
        }
      }
    ]
  }
}
function SellerDashboard() {
  return (
    <div>
      <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-4 gap-5">

        <div className="bg-[#fae8e8] flex justify-between items-center py-3 px-3  rounded-md">
          <div className="flex flex-col gap-2">
            <span className="text-md font-bold">1238
            </span>
            <span className="text-[16px] font-medium">Total Salse</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#fa0305] text-white text-xl flex justify-center items-center ">
            <MdCurrencyExchange className="shadow-lg" />
          </div>
        </div>
        <div className="bg-violet-300 flex justify-between items-center py-3 px-3  rounded-md">
          <div className="flex flex-col gap-2 ">
            <span className="text-md font-bold">50</span>
            <span className="text-[16px] font-medium">Products</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#760077] text-white text-xl flex justify-center items-center ">
            <MdProductionQuantityLimits className="shadow-lg" />
          </div>
        </div>
        <div className="bg-amber-200 flex justify-between items-center py-3 px-3  rounded-md">
          <div className="flex flex-col gap-2 ">
            <span className="text-md font-bold">10</span>
            <span className="text-[16px] font-medium">Orders</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-zinc-700 text-white text-xl flex justify-center items-center ">
            <FaUsers className="shadow-lg " />
          </div>
        </div>
        <div className="bg-green-200 flex justify-between items-center py-3 px-3  rounded-md">
          <div className="flex flex-col gap-2">
            <span className="text-md font-bold">10</span>
            <span className="text-[16px] font-medium">Pendding Orders</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-sky-600 text-white text-xl flex justify-center items-center ">
            <SlBasket className="shadow-lg" />
          </div>
        </div>
      </div>
      <div className="w-full  flex flex-wrap mt-7">
        <div className="w-full lg:w-7/12  lg:pr-3">
          <div className="w-full bg-[#6a5fdf] p-4 rounded-md">
            <Chart options={state.options} series={state.series} type="bar" height={350} />
          </div>
        </div>
        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <div className="bg-[#6a5fdf]  w-full p-4 rounded-md text-[#d0d2d6]">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-[#d0d2d6] ">
                Recent Seller Message
              </h2>
              <Link className="font-semibold text-sm text-[#d0d2d6]"> View All</Link>
            </div>
            <div className="pt-5 pl-3 flex gap-2 flex-col text-[#d6d2d6] right-0 ">
              <ol className="relative py-4 bg-slate-800 rounded-lg ml-6">
                <li>
                  <div className="w-8 h-8 absolute -left-10.5 shadow-lg top-1 ring-4 rounded-full ring-sky-500"><img className="w-full h-full object-cover rounded-full" src="http://localhost:5173/images/admin1.jfif" alt="" /></div>
                  <div className="flex flex-col gap-5">

                    <div className="px-1.5 text-[10px] flex items-center justify-between rounded-lg border border-slate-800">
                      <span>Seller</span>
                      <time>2 day ago</time>
                    </div>
                    <div className="bg-slate-600 mx-1.5 text-xs rounded-sm px-1 py-2">
                      How Are you ?
                    </div>
                  </div>
                </li>
              </ol>
              <ol className="relative py-4 bg-slate-800 rounded-lg ml-6">
                <li>
                  <div className="w-8 h-8 absolute -left-10.5 shadow-lg top-1 ring-4 rounded-full ring-sky-500"><img className="w-full h-full object-cover rounded-full" src="http://localhost:5173/images/admin1.jfif" alt="" /></div>
                  <div className="flex flex-col gap-5">

                    <div className="px-1.5 text-[10px] flex items-center justify-between rounded-lg border border-slate-800">
                      <span>Admin</span>
                      <time>2 day ago</time>
                    </div>
                    <div className="bg-slate-600 mx-1.5 text-xs rounded-sm px-1 py-2">
                      How Are you ?
                    </div>
                  </div>
                </li>
              </ol>
              <ol className="relative py-4 bg-slate-800 rounded-lg ml-6">
                <li>
                  <div className="w-8 h-8 absolute -left-10.5 shadow-lg top-1 ring-4 rounded-full ring-sky-500"><img className="w-full h-full object-cover rounded-full" src="http://localhost:5173/images/admin1.jfif" alt="" /></div>
                  <div className="flex flex-col gap-5">

                    <div className="px-1.5 text-[10px] flex items-center justify-between rounded-lg border border-slate-800">
                      <span>Customer</span>
                      <time>2 day ago</time>
                    </div>
                    <div className="bg-slate-600 mx-1.5 text-xs rounded-sm px-1 py-2">
                      How Are you ?
                    </div>
                  </div>
                </li>
              </ol>


            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4 bg-[#6a5fdf]  rounded-md mt-6">
        <div className="flex justify-between items-center pb-5 text-[#d0d2d6]">
          <h2 className="font-semibold text-lg ">Recenrt Orders</h2>
          <Link >View All</Link>
        </div>
        <div className="relative overflow-x-auto ">
          <table className="w-full text-left ">
            <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700 ">
              <tr>
                <th scope="col" className="py-3 px-4">Order Id</th>
                <th scope="col" className="py-3 px-4">Price</th>
                <th scope="col" className="py-3 px-4">Payment Status</th>
                <th scope="col" className="py-3 px-4">Order Status </th>
                <th scope="col" className="py-3 px-4">Active </th>
              </tr>
            </thead>
            <tbody className="text-white">{
              [1, 2, 3, 4, 5,].map((item , i) => (

                <tr key={i}>
                  <td scope="row" className="px-4 py-3 font-medium whitespace-nowrap">#3520</td>
                  <td scope="row" className="px-4 py-3 font-medium whitespace-nowrap">$500</td>
                  <td scope="row" className="px-4 py-3 font-medium whitespace-nowrap">pending</td>
                  <td scope="row" className="px-4 py-3 font-medium whitespace-nowrap">pending</td>
                  <td scope="row" className="px-4 py-3 font-medium whitespace-nowrap">View</td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default SellerDashboard