const expenses = [
  { label: "Utilities", percent: 19.5, color: "bg-red-500" },
  { label: "Others", percent: 8.1, color: "bg-orange-500" },
  { label: "Groceries", percent: 32.3, color: "bg-yellow-500" },
  { label: "Others", percent: 8, color: "bg-gray-400" },
  { label: "Entertainment", percent: 5, color: "bg-purple-500" },
  { label: "Rent", percent: 22.5, color: "bg-pink-500" },
];

const SpendingBreakdown = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 md:p-6">
        <h3 className="text-sm text-gray-600 mb-4">This Month</h3>
        <div className="text-2xl md:text-3xl mb-4">$30,671</div>

      <div className="space-y-3">
        {expenses.map((expense, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{expense.label}</span>
              <span className="text-sm text-gray-900">{expense.percent}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full rounded-full ${expense.color}`}
                style={{ width: `${expense.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpendingBreakdown;