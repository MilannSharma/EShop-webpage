import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-current", className)}
    >
      <g transform="translate(5, 10) scale(1.2)">
        {/* L */}
        <path d="M25,15 h8 v50 h-8 z M23,73 h32 v8 h-40 v-8 h8 z" transform="translate(0, -5)" />
        {/* C */}
        <path d="M75,55 C75,74 65,85 50,85 C35,85 25,74 25,55 C25,36 35,25 50,25 C60,25 68,30 72,38 L64,42 C62,37 57,33 50,33 C40,33 33,42 33,55 C33,68 40,77 50,77 C60,77 67,68 67,55 L75,55 Z" transform="translate(0, 0)" />
      </g>
    </svg>
  );
}
