/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "../menu/MenuItem"

function Menu() {

  const menu = useLoaderData()



  return (
    <ul className="w-[95%] md:w-[80%] mx-auto">
      { menu.map(pizza => <MenuItem key={pizza.id} pizza={pizza} />) }
    </ul>
  )
}

export async function loader() {
  const menu = await getMenu()
  return menu
}


export default Menu;
