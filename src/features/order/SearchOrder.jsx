/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useNavigate } from "react-router";

function SearchOrder() {
    const [query,setQuery] = useState()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        if (!query) return
        navigate(`/order/${query}`)
        setQuery("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={query}
                placeholder="Search order..."
                onChange={(e) => setQuery(e.target.value)}
                className="rounded-2xl bg-golden-yellow-light px-1"
            />            
        </form>
    )
}

export default SearchOrder
