import React from "react";
import perfilDin from '../assets/PERFIL_dinamica.jpg'
import { useNavigate } from "react-router-dom";

const LandingPage = () =>{
    const navigate = useNavigate()
    return(
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-center text-sky-400 font-semibold mb-5 text-3xl">BIENVENIDOS AL SISTEMA DE GESTION DE MATRICULAS</h1>
                <img src={perfilDin} alt="perfil" width={200} height={200} className="rounded-full mb-10" />
                <button type="button" className="px-3 py-1 bg-sky-400 text-white font-semibold rounded-md hover:bg-sky-600 duration-300 cursor-pointer" onClick={()=>navigate('/login')}>Iniciar Sesión</button>
            </div>
        </>
    )
}

export default LandingPage