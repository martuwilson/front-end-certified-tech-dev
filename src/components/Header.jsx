/**
 * Componente Header reutilizable
 * @function
 * @param {object} props - Las props del componente
 * @param {string} props.title - El titulo del componente
 * @param {string} [props.subtitle] - El subtitulo del componente
 * @returns {JSX.Element} - El componente header
 */
export const Header= ({title, subtitle}) =>{

    return(
        <header>
            <h1>
                {title}
            </h1>
            {subtitle && <h2>{subtitle}</h2>}
        </header>
    )
}