import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

function AppLayout() {
  return (
    <div className="h-dvh">
      <MainNav />
      <main className="container mx-auto p-2 md:pt-2">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
