"use client"


const Login = ({isLayout = false } : {isLayout ?: boolean}) => {
  return (
    <button className={`flex flex-row gap-2 justify-center items-center p-1 px-3 hover:text-amber-500 rounded-sm cursor-pointer ${isLayout ? "text-slate-500" :"text-white"}`}>
        Login
    </button>
  )
}

export default Login