import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from "../Pagination";
import { RiImageAddFill } from "react-icons/ri";


const Category = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(5);
  const [pegeNumber, setPageNumber] = useState('')
  const [parPage, setParPage] = useState(5)
  const [show, setShow] = useState(false)
  return (
    <div className="w-full">
      <div className="bg-[#6a5fdf] border-b-4 border-b-zinc-600 lg:hidden px-4 mb-5 flex justify-between items-center py-4 rounded-sm">
        <span className="text-white">Category</span>
        <button onClick={() => setShow(true)} className="cursor-pointer px-8 text-white text-sm rounded-sm py-2 bg-red-500">Add</button>
      </div>
      <div className="flex-wrap w-full flex ">
        <div className="w-7/12">
          <div className="w-full bg-[#6a5fdf] p-2 rounded-md">
            <div className="p-2 rounded-md flex items-center justify-between">
              <div className="border border-zinc-700 rounded-sm text-white">
                <select
                  value={currentPage}
                  onChange={(e) => setCurrentPage(parseInt(e.target.value))}
                  className="px-6 text-zinc-900 cursor-pointer outline-0"
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
              </div>
              <div className="bg-[#283046] py-1 px-3 rounded-sm text-sm">
                <input
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                  type="text"
                  className="outline-0 text-[#d0d2d6] bg-transparent border-none"
                  placeholder="Please Search...."
                />
              </div>
            </div>

            {/* Header row */}
            <div className="flex text-sm text-[#d0d2d6] font-medium border-b border-zinc-600 px-4">
              <div className="w-1/4 py-3 whitespace-nowrap">NO</div>
              <div className="w-1/4 py-3 whitespace-nowrap">IMAGE</div>
              <div className="w-1/4 py-3 whitespace-nowrap">NAME</div>
              <div className="w-1/4 py-3 whitespace-nowrap">ACTION</div>
            </div>

            {[1, 2, 3, 4, 5].map((item, i) => (
              <div
                key={item}
                className="flex items-center text-sm text-[#d0d2d6] px-4 py-2 hover:bg-[#7a70e6]/40"
              >
                <div className="w-1/4 whitespace-nowrap">#{i + 1}</div>
                <div className="w-1/4 whitespace-nowrap">
                  <img
                    className="w-12 h-12 object-cover rounded"
                    src={`.././../public/images/category/${item}.jpg`}
                    alt=""
                  />
                </div>
                <div className="w-1/4 whitespace-nowrap">Reza</div>
                <div className="w-1/4 whitespace-nowrap">
                  <div className="flex gap-3">
                    <button className="bg-yellow-700 p-1 rounded-md cursor-pointer">
                      <FaEdit />
                    </button>
                    <button className="bg-red-700 p-1 rounded-md cursor-pointer">
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </div>
            ))}
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

        <div className={`${show ? 'right-0 ' : "-right-80"} transition-all translate-x-0 lg:right-0  w-80 lg:relative  h-screen lg:h-full fixed z-20 top-0  lg:w-5/12 pl-4`}>
          <div className="w-full bg-[#6a5fdf] flex lg:justify-between flex-col p-4 rounded-md h-full">
            <div className="text-md flex items-center justify-center text-zinc-700">

              <span className="text-xl pb-5">Add Category</span>
            </div>

            <div className="flex flex-col gap-2 pb-2">
              <label htmlFor="name">Category Name</label>
              <input id="name" name="category_name" type="text" className="border-2 border-slate-400 rounded-md px-2 py-1 outline-0 " placeholder="Category...." />
            </div>
            <div className="">

              <label htmlFor="image" className="w-full 
              hover:border-red-200 transition-all hover:border-dashed 
            border flex items-center h-50 flex-col gap-2 text-white cursor-pointer justify-center border-slate-400 rounded-md">
                <span><RiImageAddFill /></span>
                <span>select image</span>

              </label>
              <input className="hidden" type="file" name="image" id="image" />
            </div>
            <button className="w-full py-2 text-md bg-red-500 rounded-md text-white mt-2 cursor-pointer">
              Add Category
            </button>
          </div>
        </div>
      </div>
          <div onClick={() => setShow(false)} className={`${show ? "block"  : "hidden"} cursor-pointer w-full h-full bg-black/50 top-0 right-0 fixed z-10`}></div>


      </div>
  );
};

export default Category;