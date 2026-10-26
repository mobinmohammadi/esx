import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function Home() {
  const { role } = useSelector(state => state.auth)



    if(role === "seller") return <Navigate to="/seller/dashboard" replace />
    if(role === "admin") return <Navigate to="/admin/dashboard"  replace />
    if(role === "user") return <Navigate to="/seller/dashboard" replace/>

  
  return (
    <div>Home</div>
  )
}

export default Home