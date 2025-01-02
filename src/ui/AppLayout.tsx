import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

function AppLayout() {
  return (
    <>
      <MainNav />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
