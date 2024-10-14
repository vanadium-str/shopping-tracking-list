import { Link } from "react-router-dom";
import { Routes } from "../../types";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold">
        Oops! We couldn’t find the page you’re looking for
      </h1>
      <h1 className="text-xl mt-5">
        It looks like this page is missing or the URL is incorrect
      </h1>
      <Link to={`/${Routes.List}`} className="my-10 bg-blue-500 text-white text-xl p-2 rounded-md">
        Go Back to Recent Purchases
      </Link>
    </div>
  );
};

export default ErrorPage;
