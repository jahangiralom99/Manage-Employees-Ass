import {  Outlet } from "react-router-dom";
import SideLinks from "../components/SideLinks/SideLinks";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-8 bg-pink-50">
      {/* Layout Links */}
      <div className="lg:flex gap-2">
        <div className="border lg:w-32 p-3">
          <SideLinks/>
        </div>
        <div className="flex-grow border rounded-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
