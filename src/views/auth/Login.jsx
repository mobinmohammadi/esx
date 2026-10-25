import { Link } from "react-router-dom"
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { seller_login } from "../../store/Reducers/authReducers";


const Login = () => {

    const dispath = useDispatch()
    const [loginState , setLoginState] = useState({
        email : "",
        password : ""
    })

    const onChangeInput = (e) => {
        setLoginState({
            ...loginState,
            [e.target.name] : e.target.value
        })
    }

    const sendLoginHandler = (e) => {
        e.preventDefault()
        console.log(loginState);
        dispath(seller_login(loginState))
        
    }



    

    return (
        <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
            <div className="w-87.5 text-[#ffffff] p-2">
                <div className="bg-[#6f68d1] p-4 rounded-md">
                    <h2 className="text-xl mb-3 font-medium">
                        Welcome To Ecommerce
                    </h2>
                    <p className="text-sm mb-3 font-medium">
                        Please Sign in  Your Account
                    </p>
                    <form onSubmit={e => sendLoginHandler(e)} action="">
                       
                        <div className="flex flex-col gap-1 mb-1 ">

                            <label htmlFor="name" >Email</label>
                            <input value={loginState.email} onChange={onChangeInput}  name="email" placeholder="mobin@gmail.com" type="email" className="px-3 py-2 border border-slate-400 bg-transparent rounded-md" />
                        </div>
                        <div className="flex flex-col gap-1 mb-1 ">

                            <label htmlFor="name" >Password</label>
                            <input value={loginState.password} onChange={onChangeInput} name="password" placeholder="*********" type="text" className="px-3 py-2 border border-slate-400 bg-transparent rounded-md" />
                        </div>
                     

                        <button className="w-full bg-slate-800 mt-3 py-3 transition-all mb-3 px-2 rounded-md cursor-pointer hover:shadow-blue-300 hover:shadow-lg " >Sign in</button>
                        <div className="flex items-center justify-center gap-2">
                            <p>Already Have an account   ?  </p>
                            <Link to='/register' className="hover:text-red-700 transition-all">Sign up</Link>
                        </div>


                        <div className="flex items-center justify-center mt-3">
                            <div className="w-[45%] h-px  bg-slate-700"></div>
                            <div className="w-[10%] flex items-center justify-center ">
                                <span className="pb-1">or</span>
                            </div>
                            <div className="w-[45%] h-px bg-slate-700"></div>

                        </div>


                        <div className="w-full mt-3 flex items-center gap-2 & > *:cursor-pointer justify-center  & > *:w-[50%] & > *:h-10 & > *:rounded-md & > *:flex & > *:items-center & > *:justify-center">
                            <span className="bg-orange-700 shadow-lg hover:shadow-orange-700/50 overflow-hidden">
                                <FaGoogle />
                            </span>
                            <span className="bg-blue-700 shadow-lg hover:shadow-blue-700/50 overflow-hidden">
                                <FaFacebook />
                            </span>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}


export default Login