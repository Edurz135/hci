import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./perfil.css";

export default function Perfil(props) {
  const { User, onClose } = props;
  const [mostrandoFormulario, setMostrandoFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrandoFormulario(!mostrandoFormulario);
  };
  return (
    <div className="perfil bg-slate-400 p-4 text-center absolute right-12">
      <span onClick={() => onClose()}>
        <img src="/cerrar.png" className='absolute top-4 left-4 w-5' />
      </span>
      <div className="py-8 flex items-center justify-between">
        <p className='uppercase pl-10'>Hola {User.nombre}!</p>
        <div className='flex flex-col gap-6'>
          <button
            className="rounded-lg text-white bg-green-500 p-4 pl-8 pr-8 hover:bg-green-400 transition-colors duration-300"
            onClick={toggleFormulario}
          >
            Modificar
          </button>
          <button className="rounded-lg text-white bg-green-500 p-4 pl-8 pr-8 hover:bg-green-400 transition-colors duration-300">
            Wishlist
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <div className='relative cursor-pointer'>
          <img className='absolute top-2 left-5' src='/registro-actividad.png' />
          <button className="rounded-lg text-black text-start bg-zinc-200 p-4 pl-16 w-11/12 hover:bg-zinc-300 transition-colors duration-300">
            Registro de Actividad
          </button>
        </div>
        <div className='relative cursor-pointer'>
          <img className='absolute top-2 left-6' src='/historial-compras.png' />
          <button className="rounded-lg text-black  text-start bg-zinc-200 p-4 pl-16  w-11/12  hover:bg-zinc-300 transition-colors duration-300">
            Historial de Compra
          </button>
        </div>
      </div>
      <div className='w-full min-h-0.5 bg-black my-3'></div>
      {mostrandoFormulario && (
        <>
          <div className='flex justify-around'>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 2, width: '100%' },
              }}
              autoComplete="off"
            >
              <div className='flex flex-col gap-7'>
                <TextField
                  id="standard-multiline-flexible"
                  label="Nombre"
                  multiline
                  maxRows={4}
                  variant="standard"
                  defaultValue={User.nombre}
                />
                <TextField
                  id="standard-multiline-flexible"
                  label="Correo"
                  multiline
                  maxRows={4}
                  variant="standard"
                  defaultValue={User.correo}
                />
                <TextField
                  id="standard-multiline-flexible"
                  label="Tarjeta"
                  multiline
                  maxRows={4}
                  variant="standard"
                  defaultValue={User.numTarjeta}
                />
              </div>
            </Box>
            <img className="w-1/2" src='/default-perfil.png' />
          </div>
          <button
            className="rounded-lg text-white bg-gray-500 p-4 pl-8 pr-8 mt-10 hover:bg-gray-700 transition-colors duration-300"
            onClick={() => onClose()}
          >
            Guardar
          </button>
          <div className='w-full min-h-0.5 bg-black my-3'></div>
        </>
      )
      }
      <button
        className="rounded-lg text-white  bg-red-600 p-4 pl-8 pr-8 transition-colors duration-300 mt-5'"
        onClick={() => onClose()}
      >
        Cerrar Sesión
      </button>
    </div >
  );
}
