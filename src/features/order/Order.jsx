/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
// Test ID: IIDSAT

import { useFetcher, useLoaderData } from "react-router";
import { getOrder, updateOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem"
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";

// const order = {
//   id: "ABCDEF",
//   customer: "Jonas",
//   phone: "123456789",
//   address: "Arroios, Lisbon , Portugal",
//   priority: true,
//   estimatedDelivery: "2027-04-25T10:00:00",
//   cart: [
//     {
//       pizzaId: 7,
//       name: "Napoli",
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: "Diavola",
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: "Romana",
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: "-9.000,38.000",
//   orderPrice: 95,
//   priorityPrice: 19,
// };

function Order() {

  const order = useLoaderData()

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery); 

  const fetcher = useFetcher()

  useEffect(() => {
    if (fetcher.state === "idle" && !fetcher.data) {
      fetcher.load("/menu");
    }
  }, [fetcher]);
  
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2>Order ° <span className="font-bold">{id}</span> Status</h2>

        <div>
          {priority && <span className="bg-red-600 uppercase text-white py-0.5 px-4 rounded-2xl mx-2">Priority</span>          }
          <span className="bg-green-800 text-white py-0.5 px-4 rounded-2xl mx-2 uppercase">{status} order</span>
        </div>
      </div>

      <div className="bg-stone-300 flex flex-wrap items-center justify-between my-4 md:my-8 py-4 px-1">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="text-left">
        {cart.map(item => <OrderItem 
          key={item.pizzaId}
          item={item}
          ingredients={fetcher?.data?.find(el => el.id === item.pizzaId)?.ingredients ?? []}
          isLoadingIngredients={fetcher.state === "loading"}
        />)}
      </ul>

      <div className="bg-stone-300 my-4 md:my-8 py-4 px-[1rem] text-left">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
      {!priority && <UpdateOrder />}
    </div>

  );
}

export async function loader({params}) {
  const order = await getOrder(params.orderId)
  return order
}

export async function action({request, params}) {
  const data = {priority: true}
  await updateOrder(params.orderId, data)
  return null;
}

export default Order;
