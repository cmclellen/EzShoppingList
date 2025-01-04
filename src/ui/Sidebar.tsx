import { Outlet, useOutlet } from "react-router-dom";

function Sidebar() {
  const outlet = useOutlet();

  if (!outlet) return null;

  return (
    <div className="absolute top-[65px] right-0 md:sidebar bg-background w-full md:w-2/6 p-4 md:border-l md:border-primary">
      <Outlet />
    </div>
  );
}
export default Sidebar;
