import { cn } from "@/lib/utils";
import { Check, Info, AlertTriangle } from "lucide-react";

interface CustomToastProps {
  title: string;
  description: string;
  action?: () => void;
  actionLabel?: string;
  variant?: "success" | "error" | "info";
}

export function CustomToast({
  title,
  description,
  action,
  actionLabel,
  variant = "success",
}: CustomToastProps) {
  let bgColor, borderColor, gradientFrom, gradientTo, borderIconColor, icon;
  
  if (variant === "success") {
    bgColor = "bg-[#eafeed]";
    borderColor = "border-[#0eec31]";
    gradientFrom = "from-[#69e87a]";
    gradientTo = "to-[#0cca26]";
    borderIconColor = "border-[#3de154]";
    icon = <Check className="w-4 h-4 text-white" />;
  } else if (variant === "error") {
    bgColor = "bg-red-50";
    borderColor = "border-red-200";
    gradientFrom = "from-red-300";
    gradientTo = "to-red-500";
    borderIconColor = "border-red-300";
    icon = <AlertTriangle className="w-4 h-4 text-white" />;
  } else { // info
    bgColor = "bg-blue-50";
    borderColor = "border-blue-200";
    gradientFrom = "from-blue-300";
    gradientTo = "to-blue-500";
    borderIconColor = "border-blue-300";
    icon = <Info className="w-4 h-4 text-white" />;
  }

  return (
    <div className={cn(
      "w-full md:w-auto p-4",
      bgColor,
      "rounded-2xl border",
      borderColor,
      "backdrop-blur-2xl flex flex-col md:flex-row items-start md:items-center gap-3",
      "shadow-lg relative"
    )}>
      <div className="flex items-start md:items-center gap-3 w-full">
        <div className={cn(
          "p-1 bg-gradient-to-b",
          gradientFrom,
          gradientTo,
          "rounded-lg",
          borderIconColor,
          "flex-shrink-0"
        )}>
          {icon}
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[#001a4c] text-sm font-semibold font-['Satoshi Variable']">
            {title}
          </div>
          <div className="text-[#334870] text-sm font-normal font-['Satoshi Variable']">
            {description}
          </div>
        </div>
      </div>
      {action && actionLabel && (
        <button
          onClick={action}
          className="w-full md:w-auto mt-2 md:mt-0 px-3 py-2 bg-none rounded-full text-[#0c77f2] text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}