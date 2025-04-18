import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import { ToastContainer , toast } from "react-toastify";

const MateriasModal = () => {
    const { modalMate, setModalMate } = useContext(AuthContext)

    const [form, setForm] = useState({
        nombre:"",
        codigo:"",
        descripcion:"",
        creditos:""
    })
    const handleSubmit = async () =>{
        let url
        const token = localStorage.getItem('token')
        try {
            const options = {
                headers: {
                    method: 'POST',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            const respuesta = await axios.post(url, form, options)
            toast.success(respuesta.data.msg)
        } catch (error) {
            console.log(error); 
            toast.error(error.response.data.msg)
        }
    }

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    
    return (
        <>
            <div className="fixed bg-black bg-opacity-70 inset-0 transition-all duration-300">
                <ToastContainer />
                <div className="outline-1 outline-green-900 max-w-[500px] outline-offset-1 fixed top-[100px] left-[60px] right-[60px] min-w-60  lg:left-[430px] lg:right-[300px] rounded-lg shadow-2xl bg-white">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 mx-5 mt-3">
                            <label htmlFor="nombre" className="block text-sm font-semibold text-left mb-1">Nombre:</label>
                            <input  onChange={handleChange} type="text" id="nombre" value={form.nombre || ""} name="nombre" placeholder="Ingresa tu correo" className="w-full bg-white rounded-md ring ring-gray-400 py-1 pl-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-400" />
                        </div>
                        <div className="mb-3 mx-5">
                            <label htmlFor="codigo" className="block text-sm font-semibold text-left mb-1">Código:</label>
                            <input  onChange={handleChange} type="text" id="codigo" value={form.codigo || ""} name="codigo" placeholder="Ingresa tu correo" className="w-full bg-white rounded-md ring ring-gray-400 py-1 pl-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-400" />
                        </div>
                        <div className="mb-3 mx-5">
                            <label htmlFor="descripcion" className="block text-sm font-semibold text-left mb-1">Descripción:</label>
                            <input  onChange={handleChange} type="text" id="descripcion" value={form.descripcion || ""} name="descripcion" placeholder="Ingresa tu correo" className="w-full bg-white rounded-md ring ring-gray-400 py-1 pl-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-400" />
                        </div>
                        <div className="mb-3 mx-5">
                            <label htmlFor="creditos" className="block text-sm font-semibold text-left mb-1">Créditos:</label>
                            <input onChange={handleChange}  type="text" id="creditos" value={form.creditos || ""} name="creditos" placeholder="Ingresa tu correo" className="w-full bg-white rounded-md ring ring-gray-400 py-1 pl-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-400" />
                        </div>
                        
                        <div className="mb-3 mx-5 flex justify-around">
                            <button type="submit" className="py-2 px-7 text-white font-semibold bg-green-600 rounded-lg hover:bg-green-800 duration-300" onClick={() => { setTimeout(() => setModalMate(false), 3000) }}>Crear</button>
                            <button type="button" className="py-2 px-7 text-white font-semibold bg-red-600 rounded-lg hover:bg-red-800 duration-300" onClick={() => { setModalMate(false) }}>Cerrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default MateriasModal