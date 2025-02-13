/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItem from "./UpdateItem";

/* eslint-disable no-unused-vars */
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex justify-between items-center my-[1rem]">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-[1rem]">
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItem id={pizzaId} />
        <DeleteItem id={pizzaId} />
        {/* <button className="bg-golden-yellow rounded-3xl text-black font-300 px-[1.5rem] py-[0.2rem] cursor-pointer">Delete</button> */}
      </div>
    </li>
  );
}

export default CartItem;
