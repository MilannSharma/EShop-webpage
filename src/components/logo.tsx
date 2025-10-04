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
        {/* C */}
        <path
          d="M80 65 C 80 75, 75 80, 65 80 C 45 80, 40 60, 40 50 C 40 40, 45 20, 65 20 C 75 20, 80 25, 80 35"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
