type BadgeType = "CATEGORY" | "INCOME" | "EXPENSE";

interface BadgeProps {
    badgeType: BadgeType;
    badgeText: string;
}

const badgeClasses: Record<BadgeType, string> = {
    CATEGORY: "inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10",
    INCOME: "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20",
    EXPENSE: "inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 inset-ring inset-ring-red-600/10"
};

const Badge = ({ badgeType, badgeText }: BadgeProps) => {
    return (
        <span className={badgeClasses[badgeType]}>
            {badgeText}
        </span>
    );
};

export default Badge;
