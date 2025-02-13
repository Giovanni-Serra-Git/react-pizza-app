/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers.js";
import { addItem, getCurrentItemQuantity } from "../cart/cartSlice.js";
import DeleteItem from "../cart/DeleteItem.jsx"
import UpdateItem from "../cart/UpdateItem.jsx";
import Button from "../../components/Button.jsx";

/* eslint-disable react/prop-types */
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch()

  const currentItemQuantity = useSelector(getCurrentItemQuantity(id))

  const isItemInCart = currentItemQuantity > 0;

  function handleAddToCart() {

    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    }

    dispatch(addItem(newItem))


  }

  return (
    <li className={`${soldOut ? "grayscale opacity-70" : ""} flex md:flex-row my-[1rem]`}>
      <div className="mx-[1rem]">
        <img src={imageUrl} alt={name} className="w-[100px]" />
      </div>
      <div className="flex-1">
        <div className="text-left">
          <p>{name}</p>
          <p>{ingredients.join(', ')}</p>
          <div className={` flex justify-between my-[0.5rem]` }>
            {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
            <div className="flex gap-1 items-center">
              {isItemInCart && <DeleteItem id={id}/>}
              {isItemInCart && <UpdateItem id={id} />}
            </div>
            {!soldOut && !isItemInCart && <Button onClick={handleAddToCart}>Add to cart</Button>}
          </div> 
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
