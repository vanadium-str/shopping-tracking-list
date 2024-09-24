import { Outlet } from 'react-router-dom';
import Header from '../Header';
import SideBar from '../SideBar';
import Tab from '../Tab';
import { useState } from 'react';

enum TabNames {
  Items = 'items',
  Store = 'store',
}

const Layout = () => {
  const [activeTab, setActiveTab] = useState(TabNames.Items);

  return (
    <div>
      <Header />
      <div className='bg-slate-400 flex py-4 pl-44'>
        <Tab
          name='Items'
          isActive={activeTab === TabNames.Items}
        />
        <Tab
          name='Store'
          isActive={activeTab === TabNames.Store}
        />
      </div>
      <div className='flex'>
        <SideBar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
