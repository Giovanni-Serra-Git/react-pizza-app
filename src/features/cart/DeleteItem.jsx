/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { deleteItem } from "./cartSlice"
import Button from "../../components/Button"

function DeleteItem({id}) {
    const dispatch = useDispatch()
    return (
        <Button onClick={() => dispatch(deleteItem(id))}>
            Delete
        </Button>
    )
}

export default DeleteItem
