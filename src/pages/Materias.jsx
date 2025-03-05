import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import MateriasModal from "../components/modals/MateriasModal";

const Materias = () => {
    const { modalMate, setModalMate } = useContext(AuthContext)
    const [materias, setMaterias] = useState([])


    const ObtenerMaterias = async () => {
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
            setMaterias(respuesta.data)
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            ObtenerMaterias()
        }
    }, [materias])
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-4xl text-center font-semibold">Gestión de Materias</h1>
                </div>
                <div className="cursor-pointer px-4 py-2 my-5 border-2 border-dashed bg-gray-500" onClick={() => setModalMate(true)}>
                    <h1 className="">Ingresar materia</h1>
                </div>
                <table className="table-auto border-collapse border rounded-md w-1/2 mb-3">
                    <thead className="bg-blue-900">
                        <tr className="text-white">
                            <th className="px-10">Nombre</th>
                            <th className="px-10">Código</th>
                            <th className="px-10">Descripción</th>
                            <th className="px-10">Créditos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {materias.length !== 0 ? materias.map((mat) => (

                            <tr className="text-black">
                                <td>{mat.codigo}</td>
                                <td>{mat.descripcion}</td>
                                <td>{mat.creditos}</td>
                                <td>{mat.materia}</td>
                                <td>{mat.estudiante}</td>
                            </tr>

                        )) : (
                            <td></td>
                        )}
                    </tbody>
                </table>
            </div>
            {modalMate && <MateriasModal />}
        </>
    )
}

export default Materias