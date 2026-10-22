import { useState } from "react";
import { FaEye } from "react-icons/fa";
import Pagination from "../Pagination";


const DeactiveSellers = () => {
    const [searchValue, setSearchValue] = useState("");
    const [currentPage, setCurrentPage] = useState(5);
    const [pegeNumber, setPageNumber] = useState('')
    const [parPage, setParPage] = useState(5)
    return (
        <div>
            <span>DeactiveSellers</span>
            <div className="px-4 py-4 rounded-md flex bg-[#6a5fdf] items-center justify-between">

                <div className="flex flex-col gap-5 w-full">
                    <div className="flex  justify-between items-center">

                        <div className="border border-zinc-700 rounded-sm text-white">
                            <select onClick={(e) => setCurrentPage(parseInt(e.target.value))} className="px-6 text-zinc-900 py-1 cursor-pointer outline-0 " name="" id="">
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap5"></div>
                        <div className=" bg-[#283046] px-3 py-2 rounded-sm">
                            <input onChange={(e) => setSearchValue(e.target.value)} type="text" className="outline-0 text-[#d0d2d6] bg-transparent borde-none " placeholder="Please Search...." />
                        </div>
                    </div>

                    <table className="w-full text-left ">
                        <thead className="text-sm *:text-xs text-[#d0d2d6] uppercase border-b border-slate-700 ">
                            <tr>
                                <th scope="col" className="py-3 px-4">NO</th>
                                <th scope="col" className="py-3 px-4">IMAGE</th>
                                <th scope="col" className="py-3 px-4">NAME</th>
                                <th scope="col" className="py-3 px-4"> EMAIL</th>
                                <th scope="col" className="py-3 px-4">PAYMENT STATUS </th>
                                <th scope="col" className="py-3 px-4"> STATUS</th>
                                <th scope="col" className="py-3 px-4">ACTION </th>
                            </tr>
                        </thead>
                        <tbody className="text-white">{
                            [1, 2, 3, 4, 5,].map((item, i) => (

                                <tr key={i} className="*:text-[10px]">
                                    <td scope="row" className="px-4 py-3 font-medium whitespace-nowrap">{i}</td>
                                    <td scope="row" className="px-4 py-3 font-medium whitespace-nowrap">

                                        <img className="w-10 h-10" src={`http://localhost:5173/images/category/${item}.jpg`} alt="" />
                                    </td>
                                    <td scope="row" className="px-4 py-3 font-medium whitespace-nowrap">Mobin Mohammadi</td>
                                    <td scope="row" className="px-4 py-3 font-medium whitespace-nowrap">Mobin@gmail.com</td>
                                    <td scope="row" className="px-4 py-3 font-medium whitespace-nowrap">Active</td>
                                    <td scope="row" className="px-4 py-3 font-medium whitespace-nowrap">Deactive</td>
                                    <td scope="row" className="px-4 py-3 font-medium whitespace-nowrap">
                                        <span className="flex items-center justify-center rounded-md bg-green-600 text-xl p-2 hover:bg-green-900 cursor-pointer transition-all duration-100">
                                            <FaEye />
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
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
    )
}

export default DeactiveSellers