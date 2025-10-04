import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-current", className)}
    >
      <g transform="translate(10, 10) scale(0.8)">
        {/* Stylized L */}
        <path 
          d="M30,20 C40,20 40,30 40,35 L40,70 C40,75 35,80 30,80 L20,80"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 80 H 50"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Stylized C */}
        <path
          d="M90 65 C 90 85, 75 95, 60 95 C 40 95, 35 75, 50 55 C 60 40, 75 30, 90 35"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
