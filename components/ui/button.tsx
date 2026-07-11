import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 outline-none select-none disabled:pointer-events-none disabled:opacity-50 active:scale-[.97] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg shadow-primary/10 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/20",

        outline:
          "border border-border bg-background hover:bg-accent hover:border-primary/40",

        terminal:
          "border border-border bg-background backdrop-blur hover:bg-accent hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10",

        glow:
          "relative overflow-hidden bg-primary text-primary-foreground shadow-lg shadow-primary/20 before:absolute before:left-[-120%] before:top-0 before:h-full before:w-16 before:rotate-12 before:bg-white/20 before:blur-xl before:transition-all before:duration-700 hover:before:left-[150%] hover:scale-[1.03] hover:shadow-primary/40",

        ghost:
          "hover:bg-accent",

        destructive:
          "bg-destructive text-destructive-foreground hover:opacity-90",

        link:
          "text-primary underline-offset-4 hover:underline",
      },

      size: {
        sm: "h-9 px-4 gap-2",

        default: "h-11 px-6 gap-2",

        lg: "h-12 px-8 gap-2 text-base",

        icon: "size-11",

        "icon-sm": "size-9",

        "icon-lg": "size-12",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  ...props
}: ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };