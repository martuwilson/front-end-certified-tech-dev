'use client'
/* 
¿Qué es useLayoutEffect?
useLayoutEffect es un hook en React que se utiliza para ejecutar efectos secundarios después de que se ha aplicado el DOM y antes de que el navegador haga el siguiente repintado de la pantalla. Es similar a useEffect, pero con una diferencia clave: useLayoutEffect se ejecuta sincrónicamente después de las modificaciones del DOM, lo que puede ser útil para medir el DOM y realizar ajustes antes de que el navegador pinte la actualización en la pantalla.

¿Cuándo usar useLayoutEffect?
Medición del DOM: Si necesitas obtener medidas del DOM (como el tamaño de un elemento) y aplicar estilos o cambios basados en esas medidas antes de que el navegador repinte, useLayoutEffect es útil.
Sincronización de la interfaz: Cuando necesitas asegurarte de que ciertos cálculos o actualizaciones se realicen antes de que el usuario vea los cambios, puedes usar useLayoutEffect.
*/

import React, { useState, useLayoutEffect, useRef } from 'react';

const ExampleUseLayout = () => {
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    // Obtener el ancho del contenedor después de que se haya renderizado
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.getBoundingClientRect().width);
      }
    };

    updateWidth(); // Inicialmente obtener el ancho

    window.addEventListener('resize', updateWidth); // Actualizar en redimensionamiento

    // Cleanup: eliminar el listener en la limpieza del efecto
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []); // El array de dependencias vacío significa que esto se ejecuta solo una vez

  return (
    <div ref={containerRef} style={{ border: '1px solid black', padding: '10px' }}>
      <p>El ancho del contenedor es: {width}px</p>
    </div>
  );
};

export default ExampleUseLayout;

