import React from 'react';
import './menu-list-item.scss';
import salad from './salad.png'
import pizza from './pizza-slice.png'
import meat from './meat.png'

const MenuListItem = ({ menuItem }) => {

    const { title, price, url, category } = menuItem

    let icon;

    if (category === 'salads') {
        icon = salad
    }

    if (category === 'pizza') {
        icon = pizza
    }

    if (category === 'meat') {
        icon = meat
    }

    return (
        <li className="menu__item">
            <div className='menu__header'>
                <img src={icon} alt='salad'/>
                <div className="menu__title">{title}</div>
            </div>
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu__category">Category: <span>{category}</span></div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <button className="menu__btn">Add to cart</button>
        </li>
    )
}

export default MenuListItem;