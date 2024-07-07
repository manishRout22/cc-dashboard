import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const Layout = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  console.log(Outlet);
  return (
    <>
      <Sidebar isSidebar={isSidebar} />
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
