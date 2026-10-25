import { Link } from "react-router-dom"
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from 'react-spinners';
import { loaderCssOverride } from "../utils/utils";
import {
    seller_register,
    messageClear
} from "../../store/Reducers/authReducers"
import toast from "react-hot-toast";





const Register = () => {




    const dispatch = useDispatch()
    const { loader, errorMessage,
        successMessage } = useSelector(state => state.auth)

    const [state, setState] = useState({
        name: "",
        email: "",
        password: ""
    })


    const inputHandler = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }


    const sendFormSubmit = (e) => {
        e.preventDefault()
        dispatch(seller_register(state))

    }


    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
        if (successMessage) {
            toast.success(successMessage)
            setTimeout(() => {
                dispatch(messageClear())

            }, 1000);
        }

    }, [errorMessage, successMessage])


    return (
        <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
            <div className="w-87.5 text-[#ffffff] p-2">
                <div className="bg-[#6f68d1] p-4 rounded-md">
                    <h2 className="text-xl mb-3 font-medium">
                        Welcome To Ecommerce
                    </h2>
                    <p className="text-sm mb-3 font-medium">
                        Please Register  Your Account
                    </p>
                    <form action="" onSubmit={(e) => sendFormSubmit(e)}>
                        <div className="flex flex-col gap-1 mb-1 ">

                            <label htmlFor="name" >Name</label>
                            <input onChange={inputHandler} value={state.name} name="name" placeholder="mobin" type="text" className="px-3 py-2 border border-slate-400 bg-transparent rounded-md" />
                        </div>
                        <div className="flex flex-col gap-1 mb-1 ">

                            <label htmlFor="name" >Email</label>
                            <input onChange={inputHandler} value={state.email} name="email" placeholder="mobin@gmail.com" type="text" className="px-3 py-2 border border-slate-400 bg-transparent rounded-md" />
                        </div>
                        <div className="flex flex-col gap-1 mb-1 ">

                            <label htmlFor="name" >Password</label>
                            <input onChange={inputHandler} value={state.password} name="password" placeholder="*********" type="text" className="px-3 py-2 border border-slate-400 bg-transparent rounded-md" />
                        </div>
                        <div className="flex items-center w-full gap-1 mb-3">

                            <input name="checkbox" type="checkbox"
                                className="w-4 h-4 mt-0.5 text-blue-600 overflow-hidden
                             bg-gray-200 rounded border-gray-300 focus:ring-blue-300 cursor-pointer
                             " />
                            <label htmlFor="checkbox" >I agree to privacy policy & treams </label>
                        </div>

                        <button disabled={loader ? true : false} className="w-full bg-slate-800 mt-3 py-3 transition-all mb-3 px-2 rounded-md cursor-pointer hover:shadow-blue-300 hover:shadow-lg " >
                            {loader ? <PropagateLoader cssOverride={loaderCssOverride} /> : 'Sign up'}
                        </button>                        <div className="flex items-center justify-center gap-2">
                            <p>Already Have an account   ?  </p>
                            <Link to='/login' className="hover:text-red-700 transition-all">Sign in</Link>
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


export default Register