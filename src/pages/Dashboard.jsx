import { NavLink, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950">

      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col p-6 fixed h-full">
        
        <div className="mb-10">
          <h1 className="text-xl font-bold text-emerald-400 tracking-tight">
            Character Explorer
          </h1>
          <p className="text-slate-500 text-xs mt-1">Rick & Morty Universe</p>
        </div>

        <nav className="flex flex-col gap-2">
          <NavLink
            to="/dashboard/characters"
            className={({ isActive }) =>
              isActive
                ? "bg-emerald-500 text-slate-950 px-4 py-2.5 rounded-lg font-medium text-sm transition-all"
                : "text-slate-400 hover:text-emerald-400 hover:bg-slate-800 px-4 py-2.5 rounded-lg text-sm transition-all"
            }
          >
            Characters
          </NavLink>

          <NavLink
            to="/dashboard/about"
            className={({ isActive }) =>
              isActive
                ? "bg-emerald-500 text-slate-950 px-4 py-2.5 rounded-lg font-medium text-sm transition-all"
                : "text-slate-400 hover:text-emerald-400 hover:bg-slate-800 px-4 py-2.5 rounded-lg text-sm transition-all"
            }
          >
            About
          </NavLink>
        </nav>

        <div className="mt-auto">
          <p className="text-slate-600 text-xs">Built with React Router</p>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="ml-64 flex-1 p-8">
        <Outlet />
      </main>

    </div>
  )
}

export default Dashboard