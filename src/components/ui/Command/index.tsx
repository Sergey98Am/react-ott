import { Command as CommandPrimitive } from "cmdk";
import Command from "./CommandComponent";
import CommandDialog from "./Dialog";
import CommandInput from "./Input";
import CommandList from "./List";
import CommandEmpty from "./Empty";
import CommandGroup from "./Group";
import CommandSeparator from "./Separator";
import CommandItem from "./Item";
import { cn } from "@/lib/utils";

interface CommandShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {
  displayName?: string;
}

const CommandShortcut: React.FC<CommandShortcutProps> = ({
  className,
  ...props
}) => {
  return (
    <span
      className={cn("text-black-30 ml-auto text-xs tracking-widest", className)}
      {...props}
    />
  );
};

Command.displayName = CommandPrimitive.displayName;
CommandInput.displayName = CommandPrimitive.Input.displayName;
CommandList.displayName = CommandPrimitive.List.displayName;
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
CommandGroup.displayName = CommandPrimitive.Group.displayName;
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
CommandItem.displayName = CommandPrimitive.Item.displayName;
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
