import { LayoutGrid, Wallet, CreditCard, PieChart, Target, ArrowLeftRight, X } from "lucide-react";

const menuItems = [
  { icon: LayoutGrid, label: "Overview", active: true },
  { icon: Wallet, label: "Accounts", active: false },
  { icon: CreditCard, label: "Cards", active: false },
  { icon: PieChart, label: "Budgets", active: false },
  { icon: Target, label: "Goals", active: false },
  { icon: ArrowLeftRight, label: "Transactions", active: false },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-white shadow-sm p-6 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <X className="w-6 h-6" />
        </button>

        <nav className="space-y-2 mt-8 md:mt-0">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                item.active
                  ? "bg-emerald-50 text-emerald-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => onClose()}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}