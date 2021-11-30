import React from 'react';
import './App.css';

const Categorias = ({categorias,filtrarItems}) => {
    return (
        <div className="contenedor-btn">
            {categorias.map((categoria,index) => {
                return (
                    <button
                        type='button'
                        className='filter-btn'
                        key={index}
                        onClick={() => filtrarItems(categoria)}
                    >
                        {categoria}
                    </button>
                )
            })}
        </div>
    )
}

export default Categorias;