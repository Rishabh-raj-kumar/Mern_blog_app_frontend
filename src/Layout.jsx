import React from "react";
import { Outlet } from "react-router-dom";
import Header from './Header';

function Layout() {
  return (
    <main className=" w-full max-w-[700px] p-4 mx-auto">
      <Header />
      <Outlet />
    </main>
  );
}

export default Layout;
