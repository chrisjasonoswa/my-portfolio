"use client";

import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "solid" | "outline";
  color?: keyof typeof colorMap; // typed keys
  className?: string;
}

const colorMap = {
  primary: {
    solid: `
      border-none
      bg-primary
      text-white
    `,
    outline: `
      border border-primary dark:border-primary 
      text-primary dark:text-primary
    `,
  },
  secondary: {
    solid: `
      border-none
      bg-secondary dark:bg-white 
      text-white dark:text-secondary
    `,
    outline: `
      border border-secondary dark:border-white 
      text-secondary dark:text-white
    `,
  },
  red: {
    solid: `
      border-none
      bg-red-600 dark:bg-white 
      text-white dark:text-red-600
    `,
    outline: `
      border border-red-600 dark:border-red-400 
      text-red-600 dark:text-red-400
    `,
  },
  blue: {
    solid: `
      border-none
      bg-blue-600 dark:bg-white 
      text-white dark:text-blue-600
    `,
    outline: `
      border border-blue-600 dark:border-blue-400 
      text-blue-600 dark:text-blue-400
    `,
  },
  yellow: {
    solid: `
      border-none
      bg-yellow-500 dark:bg-white 
      text-white dark:text-yellow-600
    `,
    outline: `
      border border-yellow-500 dark:border-yellow-400 
      text-yellow-600 dark:text-yellow-400
    `,
  },
};


export default function Button({
  children,
  size = "md",
  variant = "solid",
  color = "primary",
  className,
  ...props
}: ButtonProps) {
  // ✅ Tailwind sizes (keep spacing & borders from your original)
  const sizes = {
    xs: "px-4 py-1.5 text-xs border-1",
    sm: "px-4 py-1.5 text-sm border-1",
    md: "px-8 py-2 text-base border-2",
    lg: "px-16 py-4 text-lg border-2",
  };

  // ✅ Base styles
  const baseStyles =
    ` inline-flex items-center gap-1 justify-center font-medium rounded-xl transition-colors select-none focus:outline-none
      hover:shadow-2xl hover:duration-500 hover:transform hover:transition-all hover:scale-103
    `;

  // 🧩 Safe lookup from color map
  const colorClasses = colorMap[color]?.[variant] ?? colorMap.primary.solid;

  return (
    <button
      {...props}
      className={clsx(baseStyles, sizes[size], colorClasses, className)}
    >
      {children}
    </button>
  );
}
