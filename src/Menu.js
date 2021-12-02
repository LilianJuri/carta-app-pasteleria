import React from 'react';
import './App.css';

const Menu = ({items}) => {
    return <div className="container-menu">
                <div className="menu">
                    {items.map((menuItem)=>{
                        const {id,nombre,img,desc,precio} = menuItem;
                        return <article key={id} className="menu-item">
                                    <img src={img} alt={nombre} className='foto'/>
                                    <div className='item-info'>
                                        <header>
                                            <h4>{nombre}</h4>
                                            <h4 className="precio">{precio}</h4>
                                        </header>
                                        <p className='item-text'>{desc}</p>
                                    </div>
                                </article>
                    })}
                </div>
            </div>
}

export default Menu;