import React, { useContext, useState } from 'react'
import Data from '../../Data/fakedata'
import FoodItems from '../FoodItems/FoodItems';
import './Foods.css'
import { UserContext } from './../../App';
import { Link } from 'react-router-dom';

const Foods = () => {

    const [foods, setFoods] = useState(Data.filter(item => item.type === 'lunch'));
    const [active, setActive] = useState(1);
    const [cart, setCart] = useContext(UserContext);
    console.log(active);

    const filterItem = (categItem, count) => {
        const updateItems = Data.filter(item => item.type === categItem)
        setFoods(updateItems)
        setActive(count)

    }

    return (
        <div className='foods mt-5 container'>
            <div className="menu-bar text-center">
                <button className={ `${active === 0 ? 'active' : null}`} onClick={()=>filterItem('breakfast', 0)}>Breakfast</button>
                <button className={ `${active === 1 ? 'active' : null}`} onClick={()=>filterItem('lunch', 1)}>Lunch</button>
                <button className={ `${active === 2 ? 'active' : null}`} onClick={()=>filterItem('dinner', 2)}>Dinner</button>
            </div>
            <div className="food">
                {
                    foods.map(food => <FoodItems key={food.id} food={food}></FoodItems>)
                }
            </div>
            <div className="cheak-out">
                <Link to={'/cart'}>
                    <button disabled={cart.length === 0 ? true:false}>Cheakout Your Food</button>
                </Link>
            </div>
        </div>
    );
};

export default Foods;