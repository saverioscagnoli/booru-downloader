import { cn } from "~/lib/utils";
import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";

import "@radix-ui/colors/plum.css";
import "@radix-ui/colors/plum-dark.css";

import "@radix-ui/colors/teal.css";
import "@radix-ui/colors/teal-dark.css";

import "@radix-ui/colors/grass.css";
import "@radix-ui/colors/grass-dark.css";

import "@radix-ui/colors/red.css";
import "@radix-ui/colors/red-dark.css";

import "@radix-ui/colors/amber.css";
import "@radix-ui/colors/amber-dark.css";

import "@radix-ui/colors/blue.css";
import "@radix-ui/colors/blue-dark.css";

import "@radix-ui/colors/gray.css";
import "@radix-ui/colors/gray-dark.css";

type IconButtonVariant = "solid" | "secondary" | "outline" | "ghost";

type IconButtonColorScheme =
  | "plum"
  | "teal"
  | "grass"
  | "red"
  | "amber"
  | "blue"
  | "b/w";

type IconButtonSize = "sm" | "md" | "lg";

const iconButtonVariants = cva(
  [
    "inline-flex justify-center items-center",
    "transition-colors",
    "select-none",
    ["disabled:opacity-50", "disabled:pointer-events-none"]
  ],
  {
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "plum",
        className: [
          "text-[--slate-1]",
          [
            "bg-[--plum-9]",
            "hover:bg-[--plum-10]",
            ["active:bg-[--plum-12]", "dark:active:bg-[--plum-8]"]
          ]
        ]
      },
      {
        variant: "secondary",
        colorScheme: "plum",
        className: [
          "text-[--plum-11]",
          ["bg-[--plum-4]", "hover:bg-[--plum-5]", "active:bg-[--plum-7]"]
        ]
      },
      {
        variant: "outline",
        colorScheme: "plum",
        className: [
          "bg-transparent border",
          "border-[--plum-8]",
          "text-[--plum-11]",
          ["hover:bg-[--plum-4]", "active:bg-[--plum-7]"]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "plum",
        className: [
          "bg-transparent",
          "text-[--plum-11]",
          ["hover:bg-[--plum-4]", "active:bg-[--plum-6]"]
        ]
      },
      {
        variant: "solid",
        colorScheme: "teal",
        className: [
          "text-[--slate-1]",
          "bg-[--teal-9]",
          "hover:bg-[--teal-10]",
          "active:bg-[--teal-11]"
        ]
      },
      {
        variant: "secondary",
        colorScheme: "teal",
        className: [
          "text-[--teal-11]",
          ["bg-[--teal-4]", "hover:bg-[--teal-5]", "active:bg-[--teal-6]"]
        ]
      },
      {
        variant: "outline",
        colorScheme: "teal",
        className: [
          "bg-transparent border",
          "border-[--teal-8]",
          "text-[--teal-11]",
          ["hover:bg-[--teal-4]", "active:bg-[--teal-7]"]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "teal",
        className: [
          "bg-transparent",
          "text-[--teal-11]",
          ["hover:bg-[--teal-4]", "active:bg-[--teal-6]"]
        ]
      },
      {
        variant: "solid",
        colorScheme: "grass",
        className: [
          "text-[--slate-1]",
          ["bg-[--grass-9]", "hover:bg-[--grass-10]", "active:bg-[--grass-11]"]
        ]
      },
      {
        variant: "secondary",
        colorScheme: "grass",
        className: [
          "text-[--grass-11]",
          ["bg-[--grass-4]", "hover:bg-[--grass-5]", "active:bg-[--grass-6]"]
        ]
      },
      {
        variant: "outline",
        colorScheme: "grass",
        className: [
          "bg-transparent border",
          "border-[--grass-8]",
          "text-[--grass-11]",
          ["hover:bg-[--grass-4]", "active:bg-[--grass-7]"]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "grass",
        className: [
          "bg-transparent",
          "text-[--grass-11]",
          ["hover:bg-[--grass-4]", "active:bg-[--grass-6]"]
        ]
      },
      {
        variant: "solid",
        colorScheme: "red",
        className: [
          ["text-[--slate-1]", "dark:text-[--slate-12]"],
          ["bg-[--red-9]", "hover:bg-[--red-10]", "active:bg-[--red-11]"]
        ]
      },
      {
        variant: "secondary",
        colorScheme: "red",
        className: [
          "text-[--red-11]",
          ["bg-[--red-4]", "hover:bg-[--red-5]", "active:bg-[--red-6]"]
        ]
      },
      {
        variant: "outline",
        colorScheme: "red",
        className: [
          "bg-transparent border",
          "border-[--red-8]",
          "text-[--red-11]",
          ["hover:bg-[--red-4]", "active:bg-[--red-7]"]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "red",
        className: [
          "bg-transparent",
          "text-[--red-11]",
          ["hover:bg-[--red-4]", "active:bg-[--red-6]"]
        ]
      },
      {
        variant: "solid",
        colorScheme: "amber",
        className: [
          ["text-[--slate-12]", "dark:text-[--slate-1]"],
          ["bg-[--amber-9]", "hover:bg-[--amber-10]", "active:bg-[--amber-11]"]
        ]
      },
      {
        variant: "secondary",
        colorScheme: "amber",
        className: [
          "text-[--amber-11]",
          ["bg-[--amber-4]", "hover:bg-[--amber-5]", "active:bg-[--amber-6]"]
        ]
      },
      {
        variant: "outline",
        colorScheme: "amber",
        className: [
          "bg-transparent border",
          "border-[--amber-8]",
          "text-[--amber-11]",
          ["hover:bg-[--amber-4]", "active:bg-[--amber-7]"]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "amber",
        className: [
          "bg-transparent",
          "text-[--amber-11]",
          ["hover:bg-[--amber-4]", "active:bg-[--amber-6]"]
        ]
      },
      {
        variant: "solid",
        colorScheme: "blue",
        className: [
          "text-[--slate-1]",
          ["bg-[--blue-9]", "hover:bg-[--blue-10]", "active:bg-[--blue-11]"]
        ]
      },
      {
        variant: "secondary",
        colorScheme: "blue",
        className: [
          "text-[--blue-11]",
          ["bg-[--blue-4]", "hover:bg-[--blue-5]", "active:bg-[--blue-6]"]
        ]
      },
      {
        variant: "outline",
        colorScheme: "blue",
        className: [
          "bg-transparent border",
          "border-[--blue-8]",
          "text-[--blue-11]",
          ["hover:bg-[--blue-4]", "active:bg-[--blue-7]"]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "blue",
        className: [
          "bg-transparent",
          "text-[--blue-11]",
          ["hover:bg-[--blue-4]", "active:bg-[--blue-6]"]
        ]
      },
      {
        variant: "solid",
        colorScheme: "b/w",
        className: [
          "text-[--slate-1]",
          "bg-[--slate-12]",
          [
            "hover:bg-[--gray-12]",
            "active:bg-[--gray-11]",
            "dark:hover:bg-[--gray-11]",
            "dark:active:bg-[--gray-10]"
          ]
        ]
      },
      {
        variant: "secondary",
        colorScheme: "b/w",
        className: [
          "text-[--gray-12]",
          ["bg-[--gray-5]", "hover:bg-[--gray-6]", "active:bg-[--gray-8]"]
        ]
      },
      {
        variant: "outline",
        colorScheme: "b/w",
        className: [
          "bg-transparent border",
          "border-[--slate-12]",
          "text-[--slate-12]",
          ["hover:bg-[--gray-3]", "active:bg-[--gray-5]"]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "b/w",
        className: [
          "bg-transparent",
          ["text-[--slate-12]", "hover:text-[--slate-1]"],
          ["hover:bg-[--slate-12]", "active:bg-[--gray-11]"]
        ]
      }
    ],
    variants: {
      variant: {
        solid: "",
        secondary: "",
        outline: "",
        ghost: ""
      },
      colorScheme: {
        plum: "",
        teal: "",
        grass: "",
        red: "",
        amber: "",
        blue: "",
        "b/w": "",
        gray: ""
      },
      size: {
        sm: "w-6 h-6 rounded",
        md: "w-8 h-8 rounded-md",
        lg: "w-11 h-11 rounded-lg"
      }
    },
    defaultVariants: {
      colorScheme: "plum",
      size: "md"
    }
  }
);

type IconButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: IconButtonVariant;
  colorScheme?: IconButtonColorScheme;
  size?: IconButtonSize;
  icon?: ReactNode;
  round?: boolean;
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = "solid",
      colorScheme = "plum",
      size = "md",
      icon,
      round,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={iconButtonVariants({
          className: cn(round && "!rounded-full", className),
          variant,
          colorScheme,
          size
        })}
        {...props}
        ref={ref}
      >
        {icon}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };
export type {
  IconButtonProps,
  IconButtonVariant,
  IconButtonColorScheme,
  IconButtonSize
};
