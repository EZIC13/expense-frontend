import {LayoutGrid, CreditCard, X, LogOut} from "lucide-react";
import {type NavigateFunction, useLocation, useNavigate} from "react-router-dom";

const menuItems = [
  { icon: LayoutGrid, label: "Dashboard", route: "/dashboard" },
  { icon: CreditCard, label: "Transactions", route: "/transactions" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
}

export function Sidebar({ isOpen, onClose, userName }: SidebarProps) {
  const userInitial: string = userName.charAt(0).toUpperCase();
  const navigate: NavigateFunction = useNavigate();
  const location = useLocation();

  const logout = async (): Promise<void> => {
    await fetch(import.meta.env.VITE_BACKEND_API + "/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    navigate("/login");
  }

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-cb-black/45 backdrop-blur-[2px] z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/*sidebar header*/}
      <div
        className={`fixed md:sticky top-0 left-0 flex h-screen w-[18rem] flex-col border-r border-gray-200 bg-white z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-6 md:border-b-0">
          <div className="flex items-center gap-3">
            <img className="h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Site Logo"/>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={onClose}
              className="text-gray-500 transition-colors hover:text-cb-black"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/*navbar items*/}
        <div className="flex flex-1 flex-col overflow-y-auto px-5 pb-6 pt-6">
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const isActive: boolean = location.pathname === item.route;

              return (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-4 rounded-md px-2 py-2.5 text-left transition-colors ${
                    isActive ? "bg-gray-50 text-cb-blue" : "text-cb-black hover:bg-gray-50 hover:text-cb-blue"
                  }`}
                  onClick={() => {
                    navigate(item.route);
                    onClose()
                  }}
                >
                  <item.icon className="h-6 w-6" strokeWidth={1.9} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/*bottom content*/}
          <div className="mt-auto px-1 pt-6">
            <div className="flex items-center gap-4 rounded-2xl px-3 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-cb-black">
                {userInitial}
              </div>
              <p className="text-xl font-semibold text-cb-black">{userName}</p>
              <button
                  onClick={logout}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-sm font-semibold text-white"
                  aria-label="Logout"
                  title="Logout"
              >
                <LogOut />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
