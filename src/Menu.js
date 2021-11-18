import React from 'react'

const Menu = ({items}) => {
    return <div>
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
}

export default Menu;