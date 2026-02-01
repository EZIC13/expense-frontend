import { Circle } from "lucide-react";

const goals = [
  {
    title: "New Car Purchase",
    description: "Save $2,500 for a down payment on a new car within two years.",
    checked: true,
  },
  {
    title: "Pay Off Credit Card Debt",
    description: "Eliminate $5,000 in credit card debt within six months.",
    checked: false,
  },
  {
    title: "Vacation Fund",
    description: "Save $2,500 for a family vacation that was put on.",
    checked: false,
  },
  {
    title: "Monthly Savings",
    description: "Contribute $500 per month to a high-yield savings account.",
    checked: false,
  },
];

export function Goals() {
  return (
    <div className="border border-gray-200 rounded-lg p-4 md:p-6">
      <h3 className="mb-4 md:mb-6">Goals</h3>

      <div className="space-y-4">
        {goals.map((goal, index) => (
          <div key={index} className="flex gap-3">
            <div className="mt-1">
              {goal.checked ? (
                <div className="w-4 h-4 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              ) : (
                <Circle className="w-4 h-4 text-orange-500" />
              )}
            </div>
            <div>
              <h4 className={goal.checked ? "text-emerald-600" : "text-orange-600"}>
                {goal.title}
              </h4>
              <p className="text-xs text-gray-600 mt-1">{goal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}