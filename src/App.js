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
      <section className='section-menu'>
        <div className='titulo'>
          <h2>Menu Pasteleria Carlota</h2>
          <div className='underline'></div>
        </div>
      </section>
      <Categorias categorias={categorias} filtrarItems={filtrarItems} />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;