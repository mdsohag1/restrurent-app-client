import React, { useContext } from 'react';
import './Cart.css'
import { UserContext } from './../../App';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useContext(UserContext);
    const navigate = useNavigate();

    const total = cart.reduce( (total, item) => total + item.price , 0);

    let shipping = 0;
    if(total > 100){
        shipping = 9.99
    }
    else if(total > 50){
        shipping = 12.99
    }
    else if(total > 0){
        shipping = 15.99
    }
    const tax = (total/10).toFixed(2)
    const grand = total + Number(tax) + shipping
    const grandTotal = grand.toFixed(2)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("hello", e.target.value);
    }
    const handlePlaceOrder = () => {
        navigate('/shipment')
    }

    return (
        <div className='container d-flex justify-content-around delivary-section'>
            <div className="delivary-info">
                <h4>Edit Delivary Datails</h4>
                <hr />
                <form action="" className='form-aria-2' onSubmit={handleFormSubmit}>
                    <input type="text" name='name' placeholder='Full Name'/>
                    <input type="email" name='email' placeholder='Contact Email' />
                    <input type="text" name='city' placeholder='City' />
                    <input type="text" name='address' placeholder='Home Address' />
                    <input type="text" name='delivary' placeholder='Add Delivary Instractor' />
                    <input disabled={false} className='delovarBtn' type="button" value="Save & Continue" />
                </form>
            </div>
            <div className="main-cart">
                <h5>From <b>Sylhet Panshi Bazar Restrura</b></h5>
                <h5>Arriving in 20-30 min</h5>
                <h5>Address: </h5>
                {
                    cart.map(item => <div className='d-flex sub-info'>
                                        <img src={item.img} alt="" width={80} />
                                        <div>
                                            <p>{item.name}</p>
                                            <h4 className='text-danger'>$ {item.price}</h4>
                                        </div>
                                        <p>I: <b>{item.quantity}</b></p>
                                     </div>
                    )
                }
                <h5>Sub-Total: <b> $ {total.toFixed(2)} </b></h5>
                <h5>Tax: <b> $ {tax} </b></h5>
                <h5>Delivary fee: <b>$ {shipping}</b> </h5>
                <h5>Total: <b>$ {grandTotal}</b> </h5>
                <button onClick={handlePlaceOrder}>Place Order</button>
            </div>
        </div>
    );
};

export default Cart;