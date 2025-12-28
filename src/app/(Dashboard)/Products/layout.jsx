"use client";

import Link from "next/link";
import { LayoutDashboard, Users, Settings, LogOut, Menu } from "lucide-react";
import { useState } from "react";

const menu = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transform transition-transform
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="h-16 flex items-center px-6 border-b font-bold text-xl">
          STEPS
        </div>

        <nav className="p-4 space-y-2">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-4 w-full px-4">
          <button className="flex w-full items-center gap-3 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay (mobile) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      {/* Main area */}
      <div className="flex-1 md:ml-64">
        {/* Header */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu size={20} />
          </button>

          <h1 className="text-lg font-semibold">Dashboard</h1>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
