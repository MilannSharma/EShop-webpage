
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-current", className)}
      // Using a path for the 'LC' logo to match the image provided
    >
        <g transform="translate(5, 18) scale(0.8)">
            {/* L */}
            <path transform="translate(0, -2)" d="M 29.5 8.5 L 29.5 75.5 L 59.5 75.5 L 59.5 83.5 L 21.5 83.5 L 21.5 8.5 L 29.5 8.5 Z" />

            {/* C */}
            <path transform="translate(0, 4)" d="M 83.31 29.53 C 80.31 22.33 73.68 17.69 64.92 17.69 C 49.38 17.69 40.5 31.79 40.5 49.41 C 40.5 67.03 49.38 81.13 64.92 81.13 C 73.68 81.13 80.31 76.49 83.31 69.29 L 75.07 69.29 C 72.88 73.18 69.17 75.31 64.92 75.31 C 53.69 75.31 48.06 64.5 48.06 49.41 C 48.06 34.32 53.69 23.51 64.92 23.51 C 69.17 23.51 72.88 25.64 75.07 29.53 L 83.31 29.53 Z" />
      </g>
    </svg>
  );
}
