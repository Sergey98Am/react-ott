import SearchIcon from "@/components/icons/SearchIcon";
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
      <Button variant="ghost" onClick={() => setOpen((open) => !open)}>
        <SearchIcon className="h-6 w-6 2xl:h-[34px] 2xl:w-[34px]" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default Loop;
