
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-current", className)}
    >
        <g transform="translate(12, 18) scale(0.85)">
            {/* L */}
            <path d="M25,15 h8 v55 h-8 z M25,70 h30 v8 h-38 v-8 h8 z" />
            {/* C */}
            <path d="M85,35 A30,30 0 0,0 55,5 q-15,0 -25,12 q-8,10 -8,25 q0,15 8,25 q10,12 25,12 q10,0 18,-7 l-5,-6 q-6,5 -13,5 q-12,0 -18,-8 q-8,-8 -8,-19 q0,-11 8,-19 q6,-8 18,-8 q10,0 16,7 l5,-6 z" />
      </g>
    </svg>
  );
}
