
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 120 120"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(10, 10)">
        <path
          d="M23.9,78.5V20.1h-4.3v-3.7h18v3.7h-4.3v58.4H23.9z"
          transform="translate(5, 5.5) scale(1.1)"
        />
        <path
          d="M96.2,56.5c-1.6-8-5.7-14.8-12.3-20.4c-6.6-5.6-14.9-8.4-25-8.4c-4.9,0-9.5,0.8-13.8,2.5v10.3c3.8-1.5,7.9-2.2,12.2-2.2c7.5,0,13.8,2.1,18.8,6.4c5,4.3,7.5,9.6,7.5,16c0,5.9-2.1,10.9-6.4,15.1c-4.3,4.2-9.7,6.3-16.4,6.3c-4.6,0-9-0.8-13.2-2.5V89c4.7,1.8,9.7,2.7,15.1,2.7c10.8,0,19.6-3.2,26.4-9.6C93.1,75.7,96.8,67.1,96.2,56.5z"
          transform="translate(0, 5.5) scale(1.1)"
        />
      </g>
    </svg>
  );
}
