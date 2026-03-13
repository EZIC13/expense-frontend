import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";

const data = [
  { day: "Mon", netIncome: 300, toSpend: 200, total: 500 },
  { day: "Tue", netIncome: 200, toSpend: 150, total: 350 },
  { day: "Wed", netIncome: 250, toSpend: 170, total: 420 },
  { day: "Thu", netIncome: 280, toSpend: 190, total: 470 },
  { day: "Fri", netIncome: 350, toSpend: 210, total: 560 },
  { day: "Sat", netIncome: 180, toSpend: 90, total: 270 },
  { day: "Sun", netIncome: 160, toSpend: 70, total: 230 },
];

export function CompareChart() {
  return (
    <div className="border border-gray-200 rounded-lg p-4 md:p-6">
      <h3 className="mb-4 md:mb-6">Compare Net Income and Spent</h3>

      <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyan-400" />
          <span className="text-xs md:text-sm text-gray-600">Net Income</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="text-xs md:text-sm text-gray-600">To Spend</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barGap={0}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis 
            dataKey="day" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#666', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#666', fontSize: 12 }}
            ticks={[0, 250, 500]}
            domain={[0, 650]}
          />
          <Bar dataKey="total" radius={[8, 8, 8, 8]} barSize={40}>
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill="url(#colorGradient)" />
            ))}
          </Bar>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity={1} />
              <stop offset="60%" stopColor="#fbbf24" stopOpacity={1} />
              <stop offset="100%" stopColor="#fb923c" stopOpacity={1} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>

      <div className="flex justify-between mt-4 px-2 md:px-4 overflow-x-auto">
        {data.map((item, index) => (
          <div key={index} className="text-center min-w-[50px]">
            <div className="text-xs text-orange-500">-${item.toSpend}k</div>
            <div className="text-xs text-cyan-500 mt-1">+${item.netIncome}k</div>
          </div>
        ))}
      </div>
    </div>
  );
}