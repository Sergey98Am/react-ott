import BellIcon from "@/components/icons/BellIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import Typography from "@/components/ui/Typography";

const Bell = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="ghost" asChild>
          <BellIcon className="h-6 w-6 2xl:h-[34px] 2xl:w-[34px]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="notifications w-80">
        <div className="notification flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Typography variant="span" className="text-sm 2xl:text-lg">
            John Doe
          </Typography>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Bell;
