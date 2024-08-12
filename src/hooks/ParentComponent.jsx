'use client';

import React, {useCallback, useState} from 'react'
import { ChildComponent } from './ChildComponent'

/* ¿Qué es useCallback?
useCallback es un hook en React que se utiliza para memorizar funciones, evitando que se vuelvan a crear en cada renderizado del componente. Al igual que useMemo, useCallback ayuda a optimizar el rendimiento al evitar cálculos o creaciones innecesarias.

¿Cuándo usar useCallback?
Pasar funciones a componentes hijos: Cuando pasas funciones a componentes hijos como props, useCallback puede ayudar a evitar que el componente hijo se vuelva a renderizar innecesariamente si la función no cambia.
Manejo de eventos: Cuando tienes manejadores de eventos que se pasan a componentes hijos o se utilizan en efectos, useCallback puede evitar que esos manejadores se vuelvan a crear en cada renderizado. */


export const ParentComponent = () => {

  const [count, setCount] = useState(0);


  const handleClick = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, [])

  /* const handleClick = () => {
    setCount(count + 1);
  } */

  console.log('ParentComponent render')


  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick}/>
    </div>
  )
}
