import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux'
import { deleteFromCart } from '../../actions'

const CartTable = ({ items, deleteFromCart }) => {

    return (
        <>
            <div className="cart__title">Your order:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const { title, price, id, url, quantity } = item

                        const itemLabel = (quantity > 1) ? 'items' : 'item'

                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-quantity">{quantity} {itemLabel}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({ items }) => {
    return {
        items
    }
}

const mapDispatchToProps = {
    deleteFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);