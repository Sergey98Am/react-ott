import Button from "@/components/ui/Button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/Command";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Loop = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div>
      {/* Magnifier */}
      <Button variant="ghost" onClick={() => setOpen((open) => !open)}>
        <MagnifyingGlassIcon className="h-6 w-6 2xl:h-[34px] 2xl:w-[34px]" />
      </Button>

      {/* Dialog result */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type a command or search..."
          className="2xl:text-lg"
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem className="2xl:text-lg">Calendar</CommandItem>
            <CommandItem className="2xl:text-lg">Search Emoji</CommandItem>
            <CommandItem className="2xl:text-lg">Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default Loop;
