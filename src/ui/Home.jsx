import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser"
import { Link } from "react-router";

function Home() {

  const username = useSelector(state => state.user.username)


  return (
    <div className="flex flex-col gap-3 items-center w-[80%] mx-auto">
      <h1 className="text-3xl">
      The finest pizza.
        <br />
        <p className="text-golden-yellow font-bold">Fresh from the oven, delivered to you !</p>
      </h1>

      {username !== "" ? (
  <Link to="/menu" className="button-golden">
    Please keep ordering,  
    <span className="font-bold"> {username}</span>
  </Link>
) : (
  <CreateUser />
)}
   
    </div>
  );
}

export default Home;
