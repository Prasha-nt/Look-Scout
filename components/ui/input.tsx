import * as React from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  animated?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, animated = false, ...props }, ref) => {
    if (animated) {
      // Destructure and remove the conflicting React props that MotionProps handles differently.
      const {
        onAnimationStart, // Already handled
        onDragStart,      // Add this
        onDragEnd,        // Add this if you might use drag
        onDrag,           // Add this if you might use drag
        onFocus,          // Add this if you might use motion's focus handlers
        onBlur,           // Add this if you might use motion's blur handlers
        // Add any other conflicting event handlers here as needed
        ...rest
      } = props;

      return (
        <motion.input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          // Spread the remaining, non-conflicting props.
          {...rest}
        />
      )
    }

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }