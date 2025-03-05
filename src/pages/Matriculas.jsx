import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import MatriculasModal from "../components/modals/MatriculasModal";

const Matriculas = () => {
    const { modalMatri, setModalMatri } = useContext(AuthContext)
    const [matriculas, setMatriculas] = useState([])


    const ObtenerMatriculas = async () => {
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
            setMatriculas(respuesta.data)
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            ObtenerMatriculas()
        }
    }, [matriculas])
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-4xl text-center font-semibold">Gestión de Matrículas</h1>
                </div>
                <div className="cursor-pointer px-4 py-2 my-5 border-2 border-dashed bg-gray-500 rounded-lg" onClick={() => setModalMatri(true)}>
                    <h1 className="">Ingresar matricula</h1>
                </div>
                <table className="table-auto border-collapse border rounded-md w-1/2 mb-3">
                    <thead className="bg-blue-900">
                        <tr className="text-white">
                            <th className="px-10">Código</th>
                            <th className="px-10">Descripción</th>
                            <th className="px-10">Créditos</th>
                            <th className="px-10">Materia</th>
                            <th className="px-10">Estudiante</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matriculas.length !== 0 ? matriculas.map((mat) => (

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
            {modalMatri && <MatriculasModal />}
        </>
    )
}

export default Matriculas