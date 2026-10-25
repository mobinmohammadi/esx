import { useState } from "react";
import Pagination from './../Pagination';
import { LuSquareArrowDown } from 'react-icons/lu';
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import SearchComponent from "../Components/SearchComponent";


const AllProducts = () => {

  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(5);
  const [pegeNumber, setPageNumber] = useState('')
  const [parPage, setParPage] = useState(5)
  const [show, setShow] = useState(false)
  const [state, setState] = useState(false)

  return (
    <div>
            <h1 className="text-zinc-800 font-bold pb-5">All Product</h1>

      <div className="w-full bg-[#6a5fdf] p-2 rounded-md">
        <SearchComponent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
        <div className="relative mt-5 overflow-x-auto bg-[#6a5fdf] py-4 px-2 rounded-sm">
          <table className="w-full min-w-[900px] text-sm text-left text-[#d0d2d6] border-collapse">
            {/* ───── هدر ───── */}
            <thead>
              <tr className="font-bold *:text-xs border-b border-slate-700">
                <th className="py-3 px-2 w-[5%]">NO</th>
                <th className="py-3 px-2 w-[10%]">IMAGE</th>
                <th className="py-3 px-2 w-[10%]">NAME</th>
                <th className="py-3 px-2 w-[10%]">CATEGORY</th>
                <th className="py-3 px-2 w-[10%]">BRAND</th>
                <th className="py-3 px-2 w-[10%]">PRICE</th>
                <th className="py-3 px-2 w-[10%]">DISCOUNT</th>
                <th className="py-3 px-2 w-[8%]">STOCK</th>
                <th className="py-3 px-2 w-[12%]">ACTIONS</th>

              </tr>
            </thead>

            {/* ───── بدنه ───── */}
            <tbody>
              <tr className="font-medium *:text-[10px]  border-b border-slate-700 align-top">
                <td className="py-3 px-2 whitespace-nowrap">1</td>
                <td className="py-3 px-2">
                  <img
                    src="/images/category/2.jpg"
                    alt=""
                    className="w-10 h-10 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-1">Pending</td>
                <td className="py-3 px-1">Pending</td>
                <td className="py-3 px-1">Pending</td>
                <td className="py-3 px-1">Pending</td>
                <td className="py-3 px-1">Pending</td>
                <td className="py-3 px-1">Pending</td>
                <td className="py-3 px-2 flex *:text-xl gap-2 *:p-1 *:rounded-sm *:cursor-pointer">
                  <Link to="/seller/dashboard/edit-product/30" className="bg-yellow-600 text-white">
                    <FaRegEdit />
                  </Link>
                  <Link className="bg-sky-600">
                    <FaEye />
                  </Link>
                  <Link className=" bg-red-600">
                    <MdDelete />
                  </Link>
                </td>

              </tr>

              {/* ───── ردیف جزئیات (expand) ───── */}
              <tr
                className={`bg-[#8288ed] transition-all duration-300 ease-in-out ${state
                  ? "opacity-100 visible"
                  : "opacity-0 invisible pointer-events-none"
                  }`}
              >
                <td colSpan={10} className="p-0">
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${state ? "max-h-40" : "max-h-0"
                      }`}
                  >
                    <div className="flex items-start text-sm text-[#d0d2d6] font-medium">
                      <div className="w-[5%] py-3 px-2 whitespace-nowrap">#34345</div>
                      <div className="w-[10%] py-3 px-2">$200</div>
                      <div className="w-[15%] py-3 px-2">Pending</div>
                      <div className="w-[12%] py-3 px-2">Pending</div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* ───── Pagination ───── */}
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
    </div>
  )
}

export default AllProducts