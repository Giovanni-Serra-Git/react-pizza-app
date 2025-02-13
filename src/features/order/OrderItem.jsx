/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";

/* eslint-disable no-unused-vars */
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <div className="flex justify-between">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
        </div>
        <p className="text-sm capitalize italic text-stone-500 my-4">
          {isLoadingIngredients ? "Loading....." : ingredients.join(", ")}
        </p>
      </div>
    </li>
  );
}

export default OrderItem;
