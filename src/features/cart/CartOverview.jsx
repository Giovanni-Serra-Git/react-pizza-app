import { useSelector } from "react-redux";
import { Link } from "react-router";
import { getTotalPizzasPrice, getTotalPizzasQuantity } from "./cartSlice";

function CartOverview() {

  const totalPizzasQuantity = useSelector(getTotalPizzasQuantity)
  const totalPizzasPrice = useSelector(getTotalPizzasPrice)

  if (totalPizzasQuantity == 0) return null

  return (
    <div className="bg-[#262626] text-white flex justify-between px-[2rem] py-6">
      <p>
        <span className="mx-4">{totalPizzasQuantity} pizzas</span>
        <span className="mx-4">$ {totalPizzasPrice}</span>
      </p>
      <Link className="uppercase" to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
