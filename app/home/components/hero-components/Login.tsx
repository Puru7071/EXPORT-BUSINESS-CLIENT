"use client"
import { CiLogin } from "react-icons/ci";


const Login = () => {
  return (
    <button className="flex flex-row gap-2 justify-center items-center p-1 px-3 text-white hover:text-amber-500 rounded-sm cursor-pointer">
        <CiLogin/>
        Login
    </button>
  )
}

export default Login