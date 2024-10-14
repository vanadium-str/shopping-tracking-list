import { Link, useLocation } from 'react-router-dom';
import { Routes } from '../../types';

const SideBar = () => {
  const location = useLocation();
  const isList = location.pathname === `/${Routes.List}`;
  const isReceived = location.pathname === `/${Routes.Received}`;

  return (
    <div className="w-36 bg-slate-300 flex flex-col items-center pt-10 flex-none">
      <ul>
        <li
          className={`
          my-4 font-semibold 
          ${isList && 'text-gray-600 border-b-2 border-solid border-blue-500'}
        `}
        >
          <Link to={`/${Routes.List}`}>Bought Items</Link>
        </li>
        <li
          className={`
          my-4 font-semibold 
          ${isReceived && 'text-gray-600 border-b-2 border-solid border-blue-500'}
        `}
        >
          <Link to={`/${Routes.Received}`}>Received List</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
