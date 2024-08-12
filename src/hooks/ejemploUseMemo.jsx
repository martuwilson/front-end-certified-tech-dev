'use client';


/* ¿Qué es useMemo?
useMemo es un hook en React que se utiliza para memorizar resultados de cálculos costosos y evitar que se vuelvan a calcular innecesariamente en cada renderizado del componente. Básicamente, useMemo te permite optimizar el rendimiento al evitar que ciertos cálculos se realicen nuevamente a menos que cambien las dependencias.

¿Cuándo usar useMemo?
Cálculos costosos: Si tienes una operación costosa que no necesita ser recalculada en cada renderizado a menos que cambien ciertos valores, useMemo puede ayudarte.
Optimización de componentes hijos: Puedes usar useMemo para evitar que componentes hijos se vuelvan a renderizar si los datos que pasan no han cambiado. */
import { data } from '@/database';
import React, { useMemo, useState } from 'react';


const average = (list) =>{
    console.log('Calculating average...')

    const suma = list.reduce((a, b) => a + b.amount, 0)
    return `El promedio es: ${suma / list.length}`
}


export const Stadistics = () => {
    const [show, setShow] = useState(false)

    const averageMemo = useMemo(() => average(data), [data])    
    //con averageMemo lo que hacemos es ejecutarlo una vez y luego lo memorizamos, por lo que si el array data no cambia, no se volverá a ejecutar la función average. Incluso, si tocamos el button de Show/Hide, la función average no se ejecutará nuevamente, ya que no estamos cambiando el array data.
    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div>
            <h2>
                Stadistics {averageMemo}
            </h2>
            <button onClick={handleShow}>{show ? 'Hide' : 'Show'}</button>
        </div>
    )
}
