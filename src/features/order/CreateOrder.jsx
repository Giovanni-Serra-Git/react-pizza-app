/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";
import store from "../../../store";
import { clearCart, getPizzasFromCart, getTotalPizzasPrice } from "../cart/cartSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function CreateOrder() {
  const username = useSelector(state => state.user.username)

  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getPizzasFromCart);

  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"

  const formError = useActionData()

  let totalPrice = useSelector(getTotalPizzasPrice)

  totalPrice = (withPriority ? totalPrice * 1.15 : totalPrice).toFixed(2)
  console.log(totalPrice)




  return (
    <div className="mt-[2rem] w-[90%] md:w-[60%] md:mt-[1rem] mx-auto text-left">
      <h2 className="text-3xl my-[1rem]">Ready to order? Let's go!</h2>

      <Form method="POST">

        <div className="flex gap-4 items-center my-[1.5rem]">
          <label className=" basis-[10rem]">First Name</label>
          <input defaultValue={username} type="text"  className="input-order" name="customer" required/>
        </div>

        <div className="flex gap-4 my-[1.5rem] items-center"> 
          <label className="basis-[10rem]">Phone number</label>
          <div className="flex flex-1">
            <input  type="tel" name="phone" className="input-order" required/>
            {formError?.phone && <p>{formError.phone}</p>}
          </div>
        </div>

        <div className="flex gap-4 items-center my-[1.5rem]">
          <label className="basis-[10rem]">Address</label>
          <div className="flex items-center flex-1">
            <input type="text" name="address" className="input-order" required/>
          </div>
        </div>

        <div className="my-[2rem]">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="mx-4 w-6 h-6"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label  htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button className="button-golden" disabled={isSubmitting}>{isSubmitting ? "Submitting Order....." : <>Order Now, <strong>$ {totalPrice}</strong></>}</button>
        </div>
      </Form>
    </div>
  );
}

export async function action({request}) {

  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true"
  }

  console.log(order)

  const error = {}

  if (!isValidPhone(order.phone))
    error.phone =
      'Insert a phone number';

  if (Object.keys(error).length > 0) return error;
  
  const newOrder = await createOrder(order)

  store.dispatch(clearCart())

  return redirect(`/order/${newOrder.id}`)

}

export default CreateOrder;
