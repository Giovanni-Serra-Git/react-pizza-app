/* eslint-disable react/prop-types */

import { useFetcher } from "react-router"
import Button from "../../components/Button"

/* eslint-disable no-unused-vars */
function UpdateOrder({order}) {

    const fetcher = useFetcher()

    return (
        <fetcher.Form method="PATCH" className="text-right">
            <Button className="font-bold">Mark Priority</Button>
        </fetcher.Form>
    )
}

export default UpdateOrder
