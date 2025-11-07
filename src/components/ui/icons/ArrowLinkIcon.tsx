export default function ArrowLinkIcon({
  size = 24,
  color = "currentColor",
}: {
  size?: number | string;
  color?: string;
}) {
  return (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
    >
      <path
        d="M7 7H17M17 7V17M17 7L7 17"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
