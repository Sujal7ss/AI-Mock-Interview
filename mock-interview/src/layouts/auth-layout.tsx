import { Outlet } from "react-router-dom"

function AuthLayout() {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center relative ">
      <img src="/assets/img/bg.png" alt="" className="absolute w-full h-full object-cover opacity-20"/>
      <Outlet />
    </div>
  )
}

export default AuthLayout