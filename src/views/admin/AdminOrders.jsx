import { useEffect, useState } from "react"
import { LuSquareArrowDown } from "react-icons/lu";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";


const AdminOrders = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchValue, setSearchValue] = useState('')
  const [pegeNumber, setPageNumber] = useState('')
  const [parPage, setParPage] = useState(5)
  const [state, setState] = useState(false)


  useEffect(() => {
    console.log(("SerchValue ====>  ", searchValue));

    console.log(("currentPage ====>  ", currentPage));


  }, [searchValue, currentPage])



  return (
    <div className=" flex text-xs flex-col gap-5">
      <div className="px-4 py-4 rounded-md flex bg-[#6a5fdf] items-center justify-between">

        <div className="border border-zinc-700 rounded-sm text-white">
          <select onClick={(e) => setCurrentPage(parseInt(e.target.value))} className="px-6 text-zinc-900 py-1 cursor-pointer outline-0 " name="" id="">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
        <div className=" bg-[#283046] px-3 py-2 rounded-sm">
          <input onChange={(e) => setSearchValue(e.target.value)} type="text" className="outline-0 text-[#d0d2d6] bg-transparent borde-none " placeholder="Please Search...." />
        </div>

      </div>

      <div className="realative mt-5 overflow-x-hidden bg-[#6a5fdf] py-4 px-2 rounded-sm">
        <div className="w-full text-sm text-left text-[#d0d2d6]">
          <div className="text-sm  text-[#d0d2d6] border-b border-slate-700 pb-2 flex font-bold items-center & > *:py-3 ">

            <div className="w-[25%]">Order ID</div>
            <div className="w-[13%]">PRICE</div>
            <div className="w-[18%]">PAYMENT STATUS</div>
            <div className="w-[18%]">ORDER STATUS</div>
            <div className="w-[18%]">ACTIONS</div>
            <div className="w-[8%] text-lg">
              <LuSquareArrowDown />
            </div>
          </div>
        </div>
        <div className=" text-[#d0d2d6] relative ">
          <div className="text-sm  text-[#d0d2d6] font-medium border-b items-start border-slate-700 pb-2 flex & > *:py-3 ">

            <div className="w-[25%] whitespace-nowrap">#34345</div>
            <div className="w-[13%] ">$200</div>
            <div className="w-[18%] ">Pending</div>
            <div className="w-[18%] ">Pending</div>
            <div className="w-[18%] ">
              <Link to={`/admin/dashboard/Details-Order`}>
                View
              </Link>
            </div>
            <div onClick={() => (setState(!state))} className="w-[8%] cursor-pointer text-lg">
              <LuSquareArrowDown />
            </div>

          </div>
          <div
            className={` bg-[#8288ed]
    w-full flex items-start pb-2 text-sm text-[#d0d2d6] font-medium
    transition-all duration-300 ease-in-out
    ${state
                ? "opacity-100 translate-y-0 max-h-20 visible"
                : "opacity-0 -translate-y-2 max-h-0 overflow-hidden invisible pointer-events-none"}
  `}
          >
            <div className="w-[25%] whitespace-nowrap py-3">#34345</div>
            <div className="w-[13%] py-3">$200</div>
            <div className="w-[18%] py-3">Pending</div>
            <div className="w-[18%] py-3">Pending</div>
          </div>
          <div
            className={` bg-[#8288ed]
    w-full flex items-start pb-2 text-sm text-[#d0d2d6] font-medium
    transition-all duration-300 ease-in-out
    ${state
                ? "opacity-100 translate-y-0 max-h-20 visible"
                : "opacity-0 -translate-y-2 max-h-0 overflow-hidden invisible pointer-events-none"}
  `}
          >
            <div className="w-[25%] whitespace-nowrap py-3">#34345</div>
            <div className="w-[13%] py-3">$200</div>
            <div className="w-[18%] py-3">Pending</div>
            <div className="w-[18%] py-3">Pending</div>

          </div>
        </div>


        <div className="flex justify-end pr-5 pt-8">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            parPage={parPage}
            showItem={3}


          />

        </div>
      </div>

    </div>
  )
}

export default AdminOrders