import { ClockIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import { Card, CardContent } from "../ui/Card";
import Image from "../ui/Image";
import Typography from "../ui/Typography";
import React from "react";
import { Link } from "react-router-dom";

interface VideoCardProps {
  to?: string;
  image: string;
  title: string;
  description: string;
  duration: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  to,
  image,
  title,
  description,
  duration,
}) => {
  const cardContent = (
    <CardContent className="flex flex-col space-y-4 p-0 md:flex-row md:items-center md:space-x-5 md:space-y-0">
      {/* Image and play icon */}
      <div className="relative w-44 min-w-0 flex-shrink-0 flex-grow-0">
        {/* Image */}
        <div className="aspect-ratio-wildscreen rounded-md">
          <Image
            src={image}
            alt="das"
            className="rounded-xl border border-dark-black-15 object-cover"
          />
        </div>

        {/* Play icon */}
        <div className="play absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <div
            className="icon-parent rounded-full p-[11px]"
            style={{
              background: "rgba(0, 0, 0, 0.60)",
            }}
          >
            <PlayCircleIcon className="h-7 w-7" />
          </div>
        </div>
      </div>

      {/* Video title, duration and description */}
      <div className="space-y-2.5 2xl:space-y-3.5">
        {/* Title and duration */}
        <div className="info-heading flex flex-col-reverse justify-between	space-y-2.5 space-y-reverse md:flex-row md:items-center 2xl:space-x-3.5">
          {/* Title */}
          <h4 className="text-base font-semibold md:text-lg 2xl:text-xl">
            {title}
          </h4>

          {/* Duration */}
          <div className="md:text-md flex w-fit min-w-[80px] items-center justify-center space-x-1 rounded-md border border-dark-black-15 bg-dark-black-08 p-1.5 text-xs text-grey-grey-60 2xl:rounded-lg 2xl:px-2.5 2xl:py-2 2xl:text-base">
            <ClockIcon className="h-5 w-5 2xl:h-6 2xl:w-6" />
            <span className="font-medium">{duration}</span>
          </div>
        </div>

        {/* Description */}
        <Typography
          variant="body"
          className="hidden text-base md:block 2xl:text-lg"
        >
          {description}
        </Typography>
      </div>
    </CardContent>
  );

  return (
    <Card className="border-none">
      {to ? (
        <Link to={to}>
          <div>{cardContent}</div>
        </Link>
      ) : (
        <div>{cardContent}</div>
      )}
    </Card>
  );
};

export default VideoCard;
