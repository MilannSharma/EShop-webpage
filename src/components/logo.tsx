import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-current", className)}
    >
      <g transform="translate(15, 10) scale(0.9)">
        <path
          d="M32 20 H38 V70 H32 Z"
          fill="currentColor"
        />
        <path
          d="M32 70 H55 V76 H32 Z"
          fill="currentColor"
        />
        <path
          d="M65 25 C 40 25, 40 65, 65 65 C 75 65, 80 60, 80 50 C 80 40, 75 35, 65 35 C 55 35, 50 40, 50 50"
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
