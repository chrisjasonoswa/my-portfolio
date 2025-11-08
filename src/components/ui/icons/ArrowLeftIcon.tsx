export default function ArrowLeftIcon({
  size = 24,
  color = "currentColor",
}: {
  size?: number | string;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="bevel"
      strokeMiterlimit="10"
    >
      <polyline points="37,15 20,32 37,49" />
    </svg>
  );
}
