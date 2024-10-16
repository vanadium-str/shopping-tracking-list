import { Link } from "react-router-dom";
import items from '../../db/items.json';
import { Routes } from "../../types";

const HomePage = () => {
  const filteredItems = items.filter((item) => !item.received);
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-5xl my-10 text-center">Welcome back!</h1>
      <div className="text-2xl my-10 text-center mx-3 sm:mx-1">
        You have {filteredItems.length} bought items in your shopping list
      </div>
      <Link to={`/${Routes.List}`} className="my-10 bg-blue-500 text-white text-xl p-2 rounded-md">
        Check Recent Purchases
      </Link>
    </div>
  )
}

export default HomePage;