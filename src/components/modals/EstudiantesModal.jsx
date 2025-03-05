import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const EstudiantesModal = () => {
    const { setModalEst } = useContext(AuthContext)
    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        cedula: "",
        fechaNacimiento: "",
        ciudad: "",
        direccion: "",
        telefono: "",
        email: ""
    })

    const handleSubmit = async () => {
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
                        <div className="mb-3 mx-5 flex gap-5 mt-3">
                            <div>
                                <label htmlFor="nombre" className="block text-sm font-semibold text-left mb-1">Nombre:</label>
                                <input onChange={handleChange} value={form.nombre || ""} type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre" className="w-full bg-white rounded-md ring ring-gray-400 py-1 pl-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-400" />
                            </div>
                            <div>
                                <label htmlFor="apellido" className="block text-sm font-semibold text-left mb-1">Apellido:</label>
                                <input onChange={handleChange} value={form.apellido || ""} type="text" id="apellido" name="apellido" placeholder="Ingresa tu apellido" className="w-full bg-white rounded-md ring ring-gray-400 py-1 pl-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-400" />
                            </div>
                        </div>
                        <div className="mb-3 mx-5 flex gap-5 mt-3">
                            <div>
                                <label htmlFor="cedula" className="block text-sm font-semibold text-left mb-1">Cedula:</label>
                                <input onChange={handleChange} value={form.cedula || ""} type="text" id="cedula" name="cedula" placeholder="Ingresa tu cedula" className="w-full bg-white rounded-md ring ring-gray-400 py-1 pl-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-400" />
                            </div>
                            <div>
                                <label htmlFor="fechaNacimiento" className="block text-sm font-semibold text-left mb-1">Fecha-nacimiento:</label>
                                <input onChange={handleChange} value={form.fechaNacimiento || ""} type="date" id="fechaNacimiento" name="fechaNacimiento" placeholder="Ingresa tu fecha de nacimiento" className="w-full bg-white rounded-md ring ring-gray-400 py-1 pl-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-400" />
                            </div>
                        </div>

                        <div className="mb-3 mx-5">
                            <label htmlFor="ciudad" className="block text-sm font-semibold text-left mb-1">Ciudad:</label>
                            <input onChange={handleChange} value={form.ciudad || ""} type="text" id="ciudad" name="ciudad" placeholder="Ingresa tu ciudad" className="w-full bg-white rounded-md ring ring-gray-400 py-1 pl-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-400" />
                        </div>
                        <div className="mb-3 mx-5">
                            <label htmlFor="direccion" className="block text-sm font-semibold text-left mb-1">Dirección:</label>
                            <input onChange={handleChange} value={form.direccion || ""} type="text" id="direccion" name="direccion" placeholder="Ingresa tu direccion" className="w-full bg-white rounded-md ring ring-gray-400 py-1 pl-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-400" />
                        </div>
                        <div className="mb-3 mx-5">
                            <label htmlFor="telefono" className="block text-sm font-semibold text-left mb-1">Teléfono:</label>
                            <input onChange={handleChange} value={form.telefono || ""} type="text" id="telefono" name="telefono" placeholder="Ingresa tu telefono" className="w-full bg-white rounded-md ring ring-gray-400 py-1 pl-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-400" />
                        </div>
                        <div className="mb-3 mx-5">
                            <label htmlFor="email" className="block text-sm font-semibold text-left mb-1">E-mail:</label>
                            <input onChange={handleChange} value={form.email || ""} type="email" id="email" name="email" placeholder="Ingresa tu e-mail" className="w-full bg-white rounded-md ring ring-gray-400 py-1 pl-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-green-400" />
                        </div>
                        <div className="mb-3 mx-5 flex justify-around">
                            <button type="submit" className="py-2 px-7 text-white font-semibold bg-green-600 rounded-lg hover:bg-green-800 duration-300" onClick={() => { setTimeout(() => setModalEst(false), 3000) }}>Crear</button>
                            <button type="button" className="py-2 px-7 text-white font-semibold bg-red-600 rounded-lg hover:bg-red-800 duration-300" onClick={() => { setModalEst(false) }}>Cerrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default EstudiantesModal