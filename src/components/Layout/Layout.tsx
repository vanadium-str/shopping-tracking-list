import { Outlet } from 'react-router-dom';
import Header from '../Header';
import SideBar from '../SideBar';
import Tab from '../Tab';
import { useState } from 'react';
import { TabNames } from '../../types';

const Layout = () => {
  const [activeTab, setActiveTab] = useState(TabNames.Items);

  const handleSetItemsTab = () => {
    setActiveTab(TabNames.Items);
  }

  const handleSetStoreTab = () => {
    setActiveTab(TabNames.Store);
  }

  return (
    <div>
      <Header />
      <div className='bg-slate-400 flex py-3 pl-44'>
        <Tab
          name='Items'
          isActive={activeTab === TabNames.Items}
          handleClick={handleSetItemsTab}
        />
        <Tab
          name='Store'
          isActive={activeTab === TabNames.Store}
          handleClick={handleSetStoreTab}
        />
      </div>
      <div className='flex'>
        <SideBar />
        <div>
          <Outlet context={{ activeTab }} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
