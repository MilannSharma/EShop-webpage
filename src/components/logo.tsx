
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn("h-8 w-8 text-primary", className)}
      aria-label="Lakshita Creations Logo"
    >
      <g
        className="fill-current"
        transform="translate(2, 2) scale(4.8)"
      >
        <path d="M12.33,40.94V10.22h3.91V3.91H3.91v6.31h3.91V40.94H3.91v6.31h20.65V40.94Z" />
        <path d="M47.78,28.61a14.86,14.86,0,0,1-5.12,11A17,17,0,0,1,32,43.05c-3.7,0-7.14-1.29-9.87-3.66V46.59H15.82V3.91h6.31V10.22A17,17,0,0,1,32,6.79a17.14,17.14,0,0,1,10.6,3.48,14.89,14.89,0,0,1,5.18,10.87H41.44c-.21-3.32-1.63-6-4-7.85a9.3,9.3,0,0,0-5.46-2.1,9.78,9.78,0,0,0-7.39,3.31A12.2,12.2,0,0,0,22,25.26a11.59,11.59,0,0,0,2.5,7.58,9.63,9.63,0,0,0,7.39,3.32,9.3,9.3,0,0,0,5.46-2.1c2.37-1.85,3.79-4.54,4-7.86Z" />
      </g>
    </svg>
  );
}
