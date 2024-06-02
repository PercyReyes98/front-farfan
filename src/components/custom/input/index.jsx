import React from "react"
import { cn } from "../../../utils/className"

export const Input = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <>
            <input
                {...props}
                ref={ref}
                className={cn("outline-none border p-2 rounded-md focus:border-primary", className)}
            />
        </>
    )
})
