/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import CartItem from "./CartItem"
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getPizzasFromCart } from './cartSlice';
import EmptyCart from "./EmptyCart"

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];


function Button({to, children, onClick}) {
  if (to) {
    return <Link className='button-golden mx-[1rem]' to={to}>{children}</Link>
  }

  return <button onClick={onClick ? onClick : ""} className="mr-[1rem] border-1 py-[0.6rem] px-4 rounded-2xl font-bold cursor-pointer">{children}</button>
}

function Cart() {
  const username = useSelector(state => state.user.username)
  const cart = useSelector(getPizzasFromCart);
  const dispatch = useDispatch()

  if (cart.length === 0) return <EmptyCart />

  return (
    <div className='w-[80%] mx-auto text-left'>

      <Link className='underline' to="/menu">&larr; Back to menu</Link>

      <div>Your cart, <span className='font-bold'>{username}</span></div>

      <ul className='my-5'>
        { cart.map( item => <CartItem key={item.pizzaId} item={item} /> ) }
      </ul>

      <div className='my-[2rem]'>
        <Button to="/order/new">Order Pizzas</Button>
        <Button onClick={() => dispatch(clearCart())}>Clear Order</Button>
        {/* <Link className='mr-[1rem] bg-golden-yellow py-[0.8rem] px-4 rounded-2xl font-bold' to="/order/new">Order pizzas</Link> */}
        {/* <button className='mr-[1rem] border-1 py-[0.6rem] px-4 rounded-2xl font-bold'>Clear cart</button> */}
      </div>
    </div>
  );
}

export default Cart;
