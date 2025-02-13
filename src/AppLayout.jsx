import { Outlet, useNavigation } from "react-router"
import Header from "./Header"
import CartOverview from "./features/cart/CartOverview"
import Loader from "./ui/Loader"

function AppLayout() {

    const navigation = useNavigation()
    const isLoading = navigation.state == "loading"


    return (
        <div className="layout">
            {isLoading && <Loader />}
            <Header />
            <main className="overflow-y-scroll">
                <Outlet />
            </main>
            <CartOverview />
        </div>
    )
}

export default AppLayout
