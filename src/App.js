import './App.css';
import React, { useState } from 'react'
import Menu from './Menu'
import Categorias from './Categorias'
import items from './datos'

const todasCategorias = ['todos',...new Set(items.map((item)=> item.categoria))]

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categorias,setCategorias] = useState(todasCategorias);

  const filtrarItems = (categoria) => {
    if(categoria === 'todos'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.categoria === categoria);
    setMenuItems(newItems);
  }


  return (
    <main>
      <div className='header'>
        <div className='contenedor-titulo'>
          <h1 className='titulo'>Menu Pasteleria Carlota</h1>
        </div>
      </div>
      <Categorias categorias={categorias} filtrarItems={filtrarItems} />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;