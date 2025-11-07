export default function ProfileIcon({
  size = 24,
  stroke = "currentColor",
  className = "",
}: {
  size?: number | string;
  stroke?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.8"
      className={className}
    >
      <circle cx="8" cy="6" r="3.25" />
      <path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5" />
    </svg>
  );
}
