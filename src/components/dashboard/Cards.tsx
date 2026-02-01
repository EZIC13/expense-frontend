import { ChevronDown, TrendingUp } from "lucide-react";

export function Cards() {
  return (
    <div className="border border-gray-200 rounded-lg p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm text-gray-600">Cards</h3>
        <button className="flex items-center gap-1 text-xs text-gray-500">
          All cards
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      <div className="space-y-4">
        {/* Cyan Card */}
        <div className="bg-gradient-to-br from-cyan-400 to-cyan-300 rounded-xl p-4 md:p-6 text-white relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-blue-900 px-3 py-1 rounded text-xs">
            VISA
          </div>
          <div className="mb-2 text-sm">Balance</div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl md:text-2xl">$2301</span>
            <TrendingUp className="w-4 h-4" />
          </div>
          <button className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded text-xs hover:bg-white/30 transition-colors">
            See card details
          </button>
        </div>

        {/* Orange Card */}
        <div className="bg-gradient-to-br from-orange-300 to-yellow-200 rounded-xl p-4 md:p-6 text-white relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <div className="w-8 h-6 bg-orange-800 rounded" />
          </div>
          <div className="mb-2 text-sm text-gray-700">Balance</div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl md:text-2xl text-gray-800">$2301</span>
            <TrendingUp className="w-4 h-4 text-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
}