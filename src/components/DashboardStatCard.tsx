
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface DashboardStatCardProps {
  title: string;
  value: string;
  description: string;
  change?: {
    value: number;
    positive: boolean;
  };
  icon: React.ReactNode;
  color?: string;
}

const DashboardStatCard = ({
  title,
  value,
  description,
  change,
  icon,
  color = "bg-learnspark-primary",
}: DashboardStatCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={`w-8 h-8 ${color} rounded-lg flex items-center justify-center text-white`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center space-x-2">
          {change && (
            <span className={`text-xs font-medium flex items-center ${change.positive ? 'text-green-600' : 'text-red-600'}`}>
              {change.positive ? (
                <ArrowUpIcon className="mr-1 h-3 w-3" />
              ) : (
                <ArrowDownIcon className="mr-1 h-3 w-3" />
              )}
              {change.value}%
            </span>
          )}
          <CardDescription>{description}</CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardStatCard;
