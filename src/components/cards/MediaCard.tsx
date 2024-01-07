import {
  ClockIcon,
  EyeIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Card, CardContent } from "../ui/Card";
import Image from "../ui/Image";
import { Badge } from "../ui/Badge";
import { formatDate, formatNumber } from "@/lib/utils";
import CustomRating from "../ui/CustomRating";
import { Link } from "react-router-dom";
import ctl from "@netlify/classnames-template-literals";

// Duration component
interface DurationProps {
  duration: string;
}

const Duration: React.FC<DurationProps> = ({ duration }) => {
  return (
    <Badge
      variant="circle"
      className="flex items-center gap-0.5 pr-2 2xl:p-1.5 2xl:pr-2.5"
    >
      <ClockIcon className="h-5 w-5 text-grey-grey-60 2xl:h-6 2xl:w-6" />
      <span className="text-xs !font-medium text-grey-grey-60 2xl:text-base">
        {duration}
      </span>
    </Badge>
  );
};

// Views component
interface ViewsProps {
  views: number;
}

const Views: React.FC<ViewsProps> = ({ views }) => {
  return (
    <Badge
      variant="circle"
      className="flex items-center gap-0.5 pr-2 2xl:p-1.5 2xl:pr-2.5"
    >
      <EyeIcon className="h-5 w-5 text-grey-grey-60 2xl:h-6 2xl:w-6" />
      <span className="text-xs !font-medium text-grey-grey-60 2xl:text-base">
        {formatNumber(views)}
      </span>
    </Badge>
  );
};

// Released Time component
interface ReleasedTimeProps {
  time: string;
}

const ReleasedTime: React.FC<ReleasedTimeProps> = ({ time }) => {
  return (
    <Badge
      variant="circle"
      className="w-full gap-0.5 pr-2 !font-semibold text-grey-grey-75 2xl:p-1.5 2xl:pr-2.5"
    >
      <p>Released at</p>
      <p>{formatDate(`${time}`)}</p>
    </Badge>
  );
};

// Season component
interface SeasonProps {
  season: number;
}

const Season: React.FC<SeasonProps> = ({ season }) => {
  return (
    <Badge
      variant="circle"
      className="flex items-center gap-0.5 pr-2 2xl:p-1.5 2xl:pr-2.5"
    >
      <RectangleStackIcon className="h-5 w-5 text-grey-grey-60 2xl:h-6 2xl:w-6" />
      <span className="text-xs !font-medium text-grey-grey-60 2xl:text-base">
        {season} season
      </span>
    </Badge>
  );
};

interface MediaCardPropsBase {
  image: string;
  to?: string;
}

interface MediaCardViewsVariant {
  variant: "views";
  duration: string;
  views: number;
}

interface MediaCardReleasedTimeVariant {
  variant: "releasedTime";
  releasedTime: string;
}

interface MediaCardRatingVariant {
  variant: "rating";
  duration: string;
  votes: number;
}

interface MediaCardSeasonVariant {
  variant: "season";
  duration: string;
  season: number;
}

type MediaCardProps =
  | (MediaCardPropsBase & MediaCardViewsVariant)
  | (MediaCardPropsBase & MediaCardReleasedTimeVariant)
  | (MediaCardPropsBase & MediaCardRatingVariant)
  | (MediaCardPropsBase & MediaCardSeasonVariant);

const MediaCard: React.FC<MediaCardProps> = (props) => {
  const cardClasses = ctl(
    `rounded-lg 
    border 
    border-dark-black-15 
    bg-dark-black-10 
    p-3 
    sm:p-4 
    2xl:rounded-xl 
    2xl:p-5`,
  );

  const cardContent = (
    <CardContent className="space-y-3 p-0 sm:space-y-4 2xl:space-y-5">
      <div className="aspect-ratio-portrait">
        <Image
          src={props.image}
          alt="dsh"
          className="rouded-lg object-cover 2xl:rounded-xl"
        />
      </div>
      {/* Variant "Views" */}
      {props.variant === "views" && (
        <div className="flex items-center justify-between">
          <Duration duration={props.duration} />
          <Views views={props.views} />
        </div>
      )}
      {/* Variant "released Time" */}
      {props.variant === "releasedTime" && (
        <div className="flex items-center justify-between">
          <ReleasedTime time={props.releasedTime} />
        </div>
      )}
      {/* Variant "rating" */}
      {props.variant === "rating" && (
        <div className="flex items-center justify-between">
          <Duration duration={props.duration} />
          <Badge
            variant="circle"
            className="flex items-center gap-0.5 space-x-1 px-2 py-1.5 pr-2 text-xs sm:px-2.5 2xl:text-sm"
          >
            <CustomRating value={4} readOnly />
            <span className="text-grey-grey-60">
              {formatNumber(props.votes)}
            </span>
          </Badge>
        </div>
      )}
      {/* Variant "season" */}
      {props.variant === "season" && (
        <div className="flex items-center justify-between">
          <Duration duration={props.duration} />
          <Season season={props.season} />
        </div>
      )}
    </CardContent>
  );

  return (
    <Card className="rounded-none border-none shadow-none">
      {props.to ? (
        <Link to={props.to}>
          <div className={cardClasses}>{cardContent}</div>
        </Link>
      ) : (
        <div className={cardClasses}>{cardContent}</div>
      )}
    </Card>
  );
};

export default MediaCard;
