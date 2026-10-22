import { IoMdMenu } from "react-icons/io";

const Header = ({ showSiderbar, setShowSidebar }) => {
  return (
    <div className={`  mr-3  w-full  py-5   z-10`}>
      <div className=" ml-auto  m-auto lg:ml-65 rounded-md h-18 py-5 flex justify-between bg-[#b1addf] px-5  transition-all">

        <div className="flex justify-between w-full items-center  ">
          <div onClick={() => setShowSidebar(!showSiderbar)} className="lg:hidden cursor-pointer & > *:w-6 & > *:h-6 bg-zinc-900 p-2 rounded-md text-slate-300">

            <IoMdMenu />
          </div>
          <div className=" hidden lg:block  py-1 px-4 rounded-sm bg-zinc-600 text-white">
            <input className="border-none outline-0 text-sm w-full" type="text" placeholder="Search Product..." />
          </div>
          <div className="flex items-center gap-2 ">
            <div className="flex text-sm flex-col text-right">

              <span className="text-x">Mobin Mohammadi</span>
              <span className="text-[10px]">Admin</span>
            </div>
            <div className="w-13 h-13 relative lg:w-12 lg:h-12 bg flex gap-5">
              <span className="absolute w-3 h-3 rounded-full right-0 top-0 bg-blue-700"></span>
              <img className="bg-cover  w-full h-full rounded-full  " src="http://localhost:5173/images/admin1.jfif" alt="" /><div className="">
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header