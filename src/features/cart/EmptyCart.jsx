import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div>
      <Link to="/menu" className='underline text-blue-700'>&larr; Back to menu</Link>

      <p className='my-4 font-bold'>Your cart is empty. Start adding some pizzas !</p>
    </div>
  );
}

export default EmptyCart;
