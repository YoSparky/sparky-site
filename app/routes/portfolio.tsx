import { Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div className="bg-ivory min-h-screen">
      <Outlet />
    </div>
  );
}
