import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { TabNames } from '../../types';
import Header from '../Header';
import SideBar from '../SideBar';
import Tab from '../Tab';

const Layout = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(TabNames.Items);
  const isHomePage = location.pathname === '/';

  const handleSetItemsTab = () => {
    setActiveTab(TabNames.Items);
  };

  const handleSetStoreTab = () => {
    setActiveTab(TabNames.Store);
  };

  return (
    <div>
      <Header />
      {!isHomePage && (
        <div className="bg-slate-400 flex py-3 pl-44">
          <Tab
            name="Items"
            isActive={activeTab === TabNames.Items}
            handleClick={handleSetItemsTab}
          />
          <Tab
            name="Store"
            isActive={activeTab === TabNames.Store}
            handleClick={handleSetStoreTab}
          />
        </div>
      )}
      <div className="flex h-screen">
        {!isHomePage && (
          <SideBar />
        )}
        <div className='w-full'>
          <Outlet context={{ activeTab }} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
