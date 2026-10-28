import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, messageClear } from './../../store/Reducers/authReducers';
import { PropagateLoader } from 'react-spinners'
import { useEffect } from "react";
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";


const AdminLogin = () => {

    const Navigate = useNavigate()

    const dispatch = useDispatch()
    const { loader, errorMessage, successMessage } = useSelector((state) => state.auth)


    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const onChangeInput = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const sendLoginHandler = async(e) => {
        e.preventDefault()
        console.log(state);
        const res = await dispatch(admin_login(state))
        if(res.meta.requestStatus === 'fulfilled'){
            Navigate("/admin/dashboard")
        }
        


    }


    const loaderCssOverride = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: '12px'
    }

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())

        }
        if (successMessage) {
            toast.success(successMessage)

            console.log("sucsuss");

        }

    }, [errorMessage, successMessage])


    return (
        <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
            <div className="w-87.5 text-[#ffffff] p-2">
                <div className="bg-[#6f68d1] p-4 rounded-md">
                    <div className="flex items-center justify-center py-5">
                        <img className="w-38" src="http://localhost:5173/images/logo.png" alt="" />
                    </div>
                    <form className="flex flex-col gap-2" onSubmit={e => sendLoginHandler(e)} action="">

                        <div className="flex flex-col gap-2 mb-1 ">

                            <label htmlFor="name" >Email</label>
                            <input value={state.email} onChange={onChangeInput} name="email" placeholder="admin@gmail.com" type="email" className="px-3 py-2 border border-slate-400 bg-transparent rounded-md" />
                        </div>
                        <div className="flex flex-col gap-2 mb-1 ">

                            <label htmlFor="name" >Password</label>
                            <input value={state.password} onChange={onChangeInput} name="password" placeholder="*********" type="text" className="px-3 py-2 border border-slate-400 bg-transparent rounded-md" />
                        </div>


                        <button disabled={loader ? true : false} className="w-full bg-slate-800 mt-3 py-3 transition-all mb-3 px-2 rounded-md cursor-pointer hover:shadow-blue-300 hover:shadow-lg " >
                            {loader ? <PropagateLoader cssOverride={loaderCssOverride} /> : 'login'}
                        </button>




                    </form>
                </div>

            </div>

        </div>
    )
}


export default AdminLogin