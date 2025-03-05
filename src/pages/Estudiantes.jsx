import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import EstudiantesModal from "../components/modals/EstudiantesModal";

const Estudiantes = () => {
    const { modalEst, setModalEst } = useContext(AuthContext)
    const [estudiantes, setEstudiantes] = useState([])
    const ObtenerEstudiantes = async () => {
        let url
        const token = localStorage.getItem('token')
        try {
            const options = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            const respuesta = await axios.get(url, options)
            setEstudiantes(respuesta.data)
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            ObtenerEstudiantes()
        }
    }, [estudiantes])

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-4xl text-center font-semibold">Gestión de Estudiantes</h1>
                </div>
                <div className="cursor-pointer px-4 py-2 my-5 border-2 border-dashed bg-gray-500 rounded-lg" onClick={() => { setModalEst(true) }}>
                    <h1 className="">Ingresar estudiante</h1>
                </div>
                <table className="table-auto border-collapse border rounded-md w-1/2 mb-3">
                    <thead className="bg-blue-900">
                        <tr className="text-white">
                            <th className="px-6">Nombre</th>
                            <th className="px-6">Apellido</th>
                            <th className="px-6">Cedula</th>
                            <th className="px-6">Fecha-nacimiento</th>
                            <th className="px-6">Ciudad</th>
                            <th className="px-6">Dirección</th>
                            <th className="px-6">Teléfono</th>
                            <th className="px-6">E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {estudiantes.length !== 0 ? estudiantes.map((est) => (
                            <tr className="text-black">
                                <td>{est.codigo}</td>
                                <td>{est.descripcion}</td>
                                <td>{est.creditos}</td>
                                <td>{est.materia}</td>
                                <td>{est.estudiante}</td>
                            </tr>
                        )) : (
                            <td></td>
                        )}
                    </tbody>
                </table>
            </div>
            {modalEst && <EstudiantesModal />}
        </>
    )
}

export default Estudiantes