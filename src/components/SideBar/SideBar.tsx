import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-44 h-screen bg-slate-300 flex flex-col items-center pt-10">
      <ul>
        <li className="my-4 font-semibold">
          <Link to="/list">Bought Items</Link>
        </li>
        <li className="my-4 font-semibold">
          <Link to="/received">Received List</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar;