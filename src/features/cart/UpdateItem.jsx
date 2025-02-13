/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { decreaseItemQuantity, getCurrentItemQuantity, increaseItemQuantity } from "./cartSlice"

function UpdateItem({id}) {
    const dispatch = useDispatch()
    const currentQuantity = useSelector(getCurrentItemQuantity(id))
    return (
        <div className="flex gap-2 items-center">
            <button className="flex items-center justify-center bg-golden-yellow rounded-full px-2 py-2 w-[30px] h-[30px] cursor-pointer font-bold" onClick={() => dispatch(decreaseItemQuantity(id))}>-</button>
            <p className="font-bold">{currentQuantity}</p>
            <button className=" flex items-center justify-center bg-golden-yellow rounded-full px-2 py-2 w-[30px] h-[30px] cursor-pointer font-bold" onClick={() => dispatch(increaseItemQuantity(id))}>+</button>
        </div>
    )
}

export default UpdateItem
