import React from 'react'
import './Checkout.css'
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal.js'

function Checkout() {

    const [{basket}] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img 
                className='checkout__add' 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                alt=""
                />

                {basket?.length === 0 ?
                    (
                        <div className=''>
                            <h2>YOUR BASKET EMPTY</h2>
                            <p>You have no items in your basket. To buy one or more 
                                products go to the home an "Add to basket" </p>
                        </div>
                    ):(
                        <div>
                            <h2 className='checkout__title'>YOUR SHOPPING BASKET 🧺 </h2>
                                {/* List out all of the Checkout Products */}
                                {basket.map(item => (
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                ))}
                        </div>
                    )
                }
            </div>
            
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal></Subtotal>
                </div>
            )}
        </div>
    );
}

export default Checkout;
