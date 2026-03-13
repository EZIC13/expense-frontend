import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Salary", value: 70, color: "#4ade80" },
  { name: "Selling", value: 20, color: "#22d3ee" },
  { name: "Donation", value: 10, color: "#fb923c" },
];

const SpendingGraph = () => {
  return (
      <div className="border border-gray-200 rounded-lg p-4 md:p-6">
        <h3 className="text-sm text-gray-600 mb-4">Spending Breakdown</h3>

        <div className="relative">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={75}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl md:text-2xl">$132,142</div>
              </div>
            </div>
      </div>

      <div className="flex items-center justify-center gap-3 md:gap-4 mt-4 flex-wrap">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-gray-600">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpendingGraph;