import { useEffect, useState } from "react"
import { LuSquareArrowDown } from "react-icons/lu";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaEye } from "react-icons/fa";


const SellerRequset = () => {
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
                    <div className="text-sm  gap-5 text-[#d0d2d6] border-b border-slate-700 pb-2 flex font-bold items-center & > *:py-3 ">

                        <div className="w-[10%]">NO</div>
                        <div className="w-[20%]">NAME</div>
                        <div className="w-[20%]">EMAIL</div>
                        <div className="w-[20%]">PAYMENT STATUS</div>
                        <div className="w-[20%]">STATUS</div>
                        <div className="w-[20%]">ACTIONS</div>

                    </div>
                </div>
                <div className=" text-[#d0d2d6] relative ">
                    <div className="text-sm text-[#d0d2d6] font-medium border-b items-start border-slate-700 pb-2 flex & > *:py-3 ">

                        <div className="w-[11%] whitespace-nowrap">1</div>
                        <div className="w-[20%] ">Mobin mohammadi </div>
                        <div className="w-[20%] ">Mobin@gmail.com</div>
                        <div className="w-[20%] ">Active</div>
                        <div className="w-[20%] ">Deactive</div>
                        <div className="w-[18%] ">
                            <Link to={"/admin/dashboard/Sellers-Details/:sellerid"} className="flex w-7 h-7 items-center justify-center rounded-md bg-green-600 text-xl p-2 hover:bg-green-900 cursor-pointer transition-all duration-100">
                                <FaEye />
                            </Link>
                        </div>


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

export default SellerRequset