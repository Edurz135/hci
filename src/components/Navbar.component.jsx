import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#DFDFDF', // Cambiar a color de fondo deseado
  '&:hover': {
    backgroundColor: alpha('#DFDFDF', 0.85), // Opcional: cambiar el color de fondo al pasar el mouse
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '50ch',
      '&:focus': {
        width: '70ch',
      },
    },
  },
}));
export default function Navbar() {
  const carrito = [
    {
      id: 1,
      product_id: 2,
      cantidad: 3,
      fechaI: "23/12/2023",
      estado: "Pagado"
    },
    {
      id: 2,
      product_id: 7,
      cantidad: 1,
      fechaI: "2/06/2024",
      estado: "Pendiente"
    },
    {
      id: 2,
      product_id: 10,
      cantidad: 1,
      fechaI: "2/06/2024",
      estado: "Pendiente"
    },
    {
      id: 4,
      product_id: 5,
      cantidad: 1,
      fechaI: "10/06/2024",
      estado: "Pendiente"
    },
  ];

  const User =
  {
    id: 1,
    nombre: "Pepe Grillo",
    correo: "pepegrillo@gmail.com",
    edad: "19",
    numTarjeta: "3093232123412231",
    foto: ""
  }

  //Caso: no se reconozca un token 
  // const User = false; 

  return (
    <nav className="bg-white shadow-lg">
      <div className="flex flex-row justify-between items-center p-4">
        <div className="flex items-center space-x-4 ml-9">
          <a href="/" className="text-xl font-semibold text-black">
            <div className="text-3xl font-bold text-black">Logo</div>
          </a>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar productos..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </div>
        <div className="flex items-center space-x-10 ">
          <a href="/store" className="text-xl font-semibold text-black">
            Tienda
          </a>
          <a href="/login" className="text-xl font-semibold text-black">
            {User ? (
              <>
                <div className='flex flex-row  items-center space-x-2'>
                  <img className="rounded-full" src={User.foto === "" ? "/default-perfil.png" : User.foto} />
                  <p className='font-semibold'>{User.nombre}</p>
                </div>
              </>
            ) : (
              "Identificarse"
            )}
          </a>
          <a href="/carrito">
            <div className='relative'>
              <img src="/Ellipse 9.png" className='absolute -right-2 top-1' />
              <p className='absolute -right-0.5 top-1 font-semibold'>{carrito.filter(item => item.estado === "Pendiente").length === 0 ? 0 : carrito.filter(item => item.estado === "Pendiente").length}</p>
              <img src="/Shopping Cart.png" />
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}
