import React from 'react'
import { BackButton } from '../../../components/Arrow'
import Header from '../../../components/Header'
import Nav from '../../../components/Nav'

const Consultar = () => {
  return (
    <>
      <Header />
      <BackButton />
      <Nav />
      <div className='flex flex-col items-center justify-center text-center mt-10 px-8 md:px-0'>
        <h1 className='text-black font-bold text-xl md:text-4xl p-4 mb-6 py-4 md:p-6 bg-blue rounded-lg '>Cuándo debo Consultar a un Profesional</h1>
        <p className='text-black text-justify text-lg md:text-xl leading-8'>
        Hay que consultar a un especialista cuando hayan pasado días sin dormir las horas necesarias (menos de 6 horas) durante 2 o 3 semanas. Existen tratamientos médicos para el insomnio, como los hipnóticos o los ansiolíticos, si este se debe a un elevado nivel de ansiedad. Consulta con tu médico para poder recibir un tratamiento adecuado.
        </p>
      </div>
    </>
  )
}

export default Consultar

