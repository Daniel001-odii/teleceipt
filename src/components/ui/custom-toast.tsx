import { cn } from "@/lib/utils";
import { InfoCircle } from "iconsax-reactjs";
import { Check, Info, AlertTriangle, Link2, X as XIcon } from "lucide-react";

interface CustomToastProps {
  title: string;
  description: string;
  action?: () => void;
  actionLabel?: string;
  variant?: "success" | "error" | "info" | "warning";
  onClose?: () => void;
}

export function CustomToast({
  title,
  description,
  action,
  actionLabel,
  variant = "success",
  onClose,
}: CustomToastProps) {
  let bgColor, gradientFrom, gradientTo, iconBgShadow, icon, borderColor;

  if (variant === "success") {
    bgColor = "bg-[#d9f7e3]"; // soft green
    gradientFrom = "from-[#4cd37a]";
    gradientTo = "to-[#19b84c]";
    iconBgShadow = "shadow-[0_8px_16px_0_rgba(25,184,76,0.25)]";
    icon = <Check className="w-5 h-5 text-white" />;
    borderColor = "border-[#b6f2ce]"; // light green
  } else if (variant === "error") {
    bgColor = "bg-[#ffd7d7]"; // soft red
    gradientFrom = "from-[#ff6b6b]";
    gradientTo = "to-[#ff3b30]";
    iconBgShadow = "shadow-[0_8px_16px_0_rgba(255,59,48,0.25)]";
    icon = <XIcon className="w-5 h-5 text-white" />;
    borderColor = "border-[#ffebeb]"; // light red
  } else if (variant === "warning") {
    bgColor = "bg-[#ffeaa3]"; // soft yellow
    gradientFrom = "from-[#ffcc4d]";
    gradientTo = "to-[#ffb300]";
    iconBgShadow = "shadow-[0_8px_16px_0_rgba(255,179,0,0.25)]";
    icon = <AlertTriangle className="w-5 h-5 text-white" />;
    borderColor = "border-[#ffb300]";
  } else {
    // info (blue)
    bgColor = "bg-[#cfe1ff]";
    gradientFrom = "from-[#5aa5ff]";
    gradientTo = "to-[#2f80ff]";
    iconBgShadow = "shadow-[0_8px_16px_0_rgba(47,128,255,0.25)]";
    icon = <InfoCircle className="w-5 h-5 text-white" />;
    borderColor = "border-[#90caf9]";
  }

  return (
    <div
      className={cn(
        "w-full md:w-fit px-4 py-4 text-white",
        bgColor,
        "rounded-2xl flex items-center justify-between gap-4",
        "shadow-md",
        "border-2",
        borderColor
      )}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div
          className={cn(
            "grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-b",
            gradientFrom,
            gradientTo,
            iconBgShadow
          )}
        >
          {icon}
        </div>
        <div className="min-w-0">
          <div className="text-black/90 text-base font-semibold truncate">
            {title}
          </div>
          <div className="text-black/70 text-sm truncate">
            {description}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {action && actionLabel && (
          <button
            onClick={action}
            className="px-3 py-2 rounded-full bg-white/60 text-black/70 text-sm font-medium hover:bg-white/80 transition-colors"
          >
            {actionLabel}
          </button>
        )}
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Close"
            className="h-10 w-10 grid place-items-center rounded-xl bg-white text-black/70 shadow-[0_8px_16px_0_rgba(0,0,0,0.08)] hover:bg-white/90"
          >
            <XIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}