import { IconSearch } from "@tabler/icons";
import React, { forwardRef } from "react";

type Size = "md" | "lg";

interface Props extends Omit<React.ComponentPropsWithoutRef<"input">, "size"> {
  size: Size;
}

const SearchBar = forwardRef<HTMLInputElement, Props>(
  ({ size, className, ...props }, ref) => {
    const isMd = size === "md" && "min-h-[2.8rem]";
    const isLg = size === "lg" && "min-h-[3rem]";

    return (
      <div
        className={`flex items-center gap-2 transition-[border-color] ease-in w-full px-[0.8rem] bg-mantle rounded-md ${isMd} ${isLg} ${className}`}
      >
        <IconSearch size={20} className="text-subtext0" />
        <input
          {...props}
          className="outline-none text-sm text-subtext0 w-full min-h-[inherit] bg-transparent"
          ref={ref}
        />
      </div>
    );
  },
);

export default SearchBar;
