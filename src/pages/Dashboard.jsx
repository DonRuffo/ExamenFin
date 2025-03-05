import React from "react";
import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
    return (
        
            
                <div className="flex h-screen">
                    <div className="fixed inset-y-0 left-0 w-64 p-4 transform bg-gray-900 block lg:static lg:block">
                        <div className="flex justify-center mb-4">
                            <h1 className="text-3xl text-white pt-4"> Matriculas</h1>
                        </div><hr className="text-white" />
                        <div className="flex flex-col items-center mt-5">
                            <Link className="text-white py-2 px-4 text-xl font-semibold" to='/dashboard/materias'>Materias</Link>
                            <Link className="text-white py-2 px-4 text-xl font-semibold" to='/dashboard/estudiantes'>Estudiantes</Link>
                            <Link className="text-white py-2 px-4 text-xl font-semibold" to='/dashboard/matriculas'>Matriculas</Link>
                        </div>
                        <div className="mt-64">
                            <h1 className="text-white"> Bienvenido-</h1>
                        </div>
                    </div>
                    <div className="flex flex-1 bg-white">
                        <div className="overflow-y-auto p-8">
                            <Outlet />
                        </div>
                    </div>
                </div>
            
    )
}

export default Dashboard