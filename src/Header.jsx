import { Link } from "react-router"
import SearchOrder from "./features/order/SearchOrder"
import Username from "./features/user/Username"

function Header() {
    return (
        <div className="flex flex-col gap-[1rem] md:flex-row justify-between bg-golden-yellow py-[1.5rem] px-[4rem]">
            <Link to="/" className="text-2xl"> Pizzeria Take Away </Link>
            <SearchOrder />
            <Username />
        </div>
    )
}

export default Header
