import { HandThumbUpIcon, SpeakerWaveIcon } from "@heroicons/react/24/outline";
import Button from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import Typography from "../ui/Typography";
import { PlayIcon, PlusIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import ctl from "@netlify/classnames-template-literals";

// When there is a class reusing, used ctl()

const iconButtonClasses = ctl(
  `rounded-lg 
  border 
  border-dark-black-15 
  bg-dark-black-06 
  p-3 
  2xl:p-3.5`,
);

const iconClasses = ctl(
  `h-6 
  w-6 
  2xl:h-7 
  2xl:w-7`,
);

interface MediaOverlayCardProps {
  className?: string;
  title: string;
  image: string;
  description: string;
}

const MediaOverlayCard: React.FC<MediaOverlayCardProps> = (props) => {
  return (
    <Card
      className="aspect-ratio-portrait md:aspect-ratio-univisium relative flex items-end rounded-none border-0 !bg-cover !bg-center !bg-no-repeat shadow-none"
      style={{
        background: `linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0.00) 100%), url(${props.image}), 50% / cover no-repeat`,
      }}
    >
      <div
        className={cn(
          "flex items-end justify-center p-6 pb-4 md:p-10 md:pb-4 2xl:p-12 2xl:pb-5",
          props.className,
        )}
      >
        <CardContent className="w-full p-0 lg:px-28 2xl:px-36">
          <div className="flex flex-col items-center gap-y-5 text-center md:gap-y-6 2xl:gap-y-7">
            {/* Title and description */}
            <div className="info">
              <Typography variant="h2">{props.title}</Typography>
              <Typography
                className="hidden font-medium md:block"
                variant="body"
              >
                {props.description}
              </Typography>
            </div>

            {/* Actions */}
            <div className="flex w-full flex-col gap-y-5 md:w-auto md:flex-row md:gap-x-5 md:gap-y-0">
              <Button className="w-full gap-1 !py-3.5 md:w-auto">
                <PlayIcon className="h-6 w-6 2xl:h-7 2xl:w-7" /> Play Now
              </Button>
              <div className="various-actions flex justify-center gap-x-2 2xl:gap-x-2.5">
                <button className={iconButtonClasses}>
                  <PlusIcon className={iconClasses} />
                </button>
                <button className={iconButtonClasses}>
                  <HandThumbUpIcon className={iconClasses} />
                </button>
                <button className={iconButtonClasses}>
                  <SpeakerWaveIcon className={iconClasses} />
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default MediaOverlayCard;
