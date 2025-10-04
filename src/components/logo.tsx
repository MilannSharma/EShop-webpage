import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-current", className)}
    >
      <g transform="translate(15, 10) scale(0.9)">
        {/* L */}
        <path
          d="M32 20 H38 V70 H32 Z"
          fill="currentColor"
        />
        <path
          d="M32 70 H55 V76 H32 Z"
          fill="currentColor"
        />
        {/* G */}
        <path
          d="M80 50 C 80 60, 75 65, 65 65 C 40 65, 40 25, 65 25 C 75 25, 80 30, 80 40"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <path
            d="M65 48 H80"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
