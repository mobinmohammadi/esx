import { Outlet } from "react-router-dom"
import Header from './Header';
import Sidebar from "./Sidebar";
import { useState } from "react";

const MainLayout = () => {

  const [showSiderbar, setShowSidebar] = useState(false)
  return (
    <div className="bg-[#cdcae9] w-full flex gap-5 min-h-screen">

      <Sidebar showSiderbar={showSiderbar}
        setShowSidebar={setShowSidebar} />
      <div className="flex gap-3 w-full ml-auto mr-6  flex-col">

        <Header showSidebar={showSiderbar}
          setShowSidebar={setShowSidebar} />
        <div className="ml-0 lg:ml-65  transition-all">
          <Outlet />
        </div>
        {showSiderbar ? (
          <div onClick={() => setShowSidebar(false)} className="bg-black/10 z-20 cursor-pointer fixed top-0 right-0 w-full h-full"></div>

        ) : null}
      </div>
    </div>
  )
}

export default MainLayout