import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { getNav } from "../navigations"
import { TbLogout2 } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";


const Sidebar = ({ showSiderbar, setShowSidebar }) => {




  const [allNav, setNav] = useState([])
  const Navigate = useNavigate()

  useEffect(() => {
    const navs = getNav("seller")
    setNav(navs)

  }, [])


  const { pathname } = useLocation()

  return (
    <div>

      <div className={`${showSiderbar
        ? "left-0" : " -left-65 lg:left-0 "} duration-200 w-65    fixed sm:block bg-[#e6e7fb] z-50 top-0 h-screen
        shadow-[0_0_15px_0_rgb(34_41_47/5%)] transition-all `}>

        <div className="h-17.5 flex justify-center items-center">
          <Link to="/" className="w-45 h-12.5">
            <img className="w-full h-full" src="http:///localhost:5173/images/logo.png" alt="" />
          </Link>
        </div>
        <ul className="px-4  flex flex-col gap-2 mt-5 & > *:cursor-pointer & > *:transition-all  & > *:rounded-sm transition-all & > *:py-4 & > *:px-3">

          {allNav.map((nav , i) => (

            <Link key={i} to={nav.path} className={` text-sm hover:pl-4 transition-all ${nav.path === pathname ? 'bg-sky-500 border-l-6 border-l-red-500  border-solid shadow-indigo-500/50 text-white' : "duration-200 text-[#030811]"} font-bold flex gap-2 items-center `}>
              <span className=" pt-0.2 & > *:w-5 & > *:h-5 flex items-center justify-center">{nav.icons}</span>
              <span to={nav.href}>{nav.title}</span>
            </Link>
          ))}
          <button className="pl-4 text-sm bg-red-500 text-white font-bold flex gap-2 items-center">

            <TbLogout2 />
            <span>Log out</span>

          </button>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar