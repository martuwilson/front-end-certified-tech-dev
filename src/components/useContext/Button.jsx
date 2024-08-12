import React from "react"
/**
 * Boton reutilizable
 * @function
 * @param {object} props - Las props para el componente
 * @param {React.ReactNode} props.children - Los hijos del componente, contenido interno que va en las tags del button
 * @returns {JSX.Element} 
 */


export const Button = ({children}) =>{


    return (
        <button className="btn btn-primary">{children}</button>
    )
}