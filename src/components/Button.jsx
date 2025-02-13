import { Link } from "react-router"

/* eslint-disable react/prop-types */
function Button({children, onClick, to, className}) {
    if (to) {
        return <Link className='button-golden' to={to}>{children}</Link>
      }
    return (
        <button className={className ? className + " button-golden" : "button-golden"} onClick={onClick ? onClick : "" }>
            {children}
        </button>
    )
}

export default Button
