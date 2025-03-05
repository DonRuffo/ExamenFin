import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {

    const [ojo, setOjo] = useState(false)
    const [form, setForm] = useState({
        email:"",
        password:""
    })

    const handleSubmit = async () =>{
        let url 
        try {
            const respuesta = await axios.post(url, form)
            localStorage.setItem('token', respuesta.data.token)
            toast.success(respuesta.data.msg)
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.msg)
        }
    }

    const HandleChange = async (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    return (
            <div className="flex justify-center">
                <ToastContainer />
                <div className="w-1/2 rounded-md outline outline-green-200 shadow-xl flex flex-col">
                    <h1 className="text-center text-3xl py-5 font-semibold">Sistema de Matrículas</h1>
                    <div>
                        <form className="w-full" onSubmit={handleSubmit}>
                            <div className="mb-3 mx-5">
                                <label htmlFor="email" className="block text-sm font-semibold text-left mb-1">Correo:</label>
                                <input type="email" id="email" name="email" value={form.email || ""} onChange={HandleChange} placeholder="Ingresa tu correo" className="w-full bg-white rounded-md ring ring-gray-400 py-1 pl-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-400" />
                            </div>
                            <div className="mb-5 mx-5">
                                <label htmlFor="pass" className="block text-sm font-semibold text-left mb-1">Contraseña:</label>
                                <div className="relative ">
                                    <input type={ojo ? 'text' : 'password'} id="pass" name="pass" value={form.password || ""} onChange={HandleChange} placeholder="**************" className="w-full bg-white rounded-md ring ring-gray-400 py-1 pl-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-400" />
                                    <button type="button" className="absolute text-black right-3 top-1/2 transform -translate-y-1/2 " onClick={()=>{setOjo(!ojo)}}>{ojo ?  <Eye size={20} /> : <EyeOff size={20}/>}</button>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="px-3 py-1 rounded-md bg-green-700 text-white mb-5 hover:bg-green-800 duration-300 cursor-pointer">Ingresar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

    )
}

export default Login