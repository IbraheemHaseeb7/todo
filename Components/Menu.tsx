import Link from "next/link";
import React from "react";

export default function Menu() {
  type MenuOptions = { [Key: string]: string };

  const options: MenuOptions[] = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Add",
      route: "/add",
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-[15%]">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {options.map((data) => {
              return (
                <li key={data.name}>
                  <Link href={data.route}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
