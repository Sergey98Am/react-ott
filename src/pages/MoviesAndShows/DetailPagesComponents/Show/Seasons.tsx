import VideoCard from "@/components/cards/VideoCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Separator } from "@/components/ui/Separator";
import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import React from "react";

interface Episode {
  number: number;
  image: string;
  title: string;
  description: string;
  duration: string;
}

interface Season {
  number: number;
  episodes: Episode[];
}

interface SeasonProps {
  infoSectionClasses: string;
  seasons: Season[];
}

const Seasons: React.FC<SeasonProps> = ({ infoSectionClasses, seasons }) => {
  return (
    <div
      className={cn(
        `${infoSectionClasses} flex w-full flex-col gap-y-5 sm:gap-y-7 2xl:gap-y-10 2xl:px-10`,
      )}
    >
      <Typography variant="h3" className="!font-bold">
        Seasons and Episodes
      </Typography>

      <div className="seasons-list">
        <Accordion
          type="multiple"
          className="flex flex-col gap-y-4 2xl:gap-y-5"
        >
          {seasons.map((season, index) => (
            // Accordion Item
            <AccordionItem
              key={`season-${index}`}
              value={`season-${index}`}
              className="rounded-lg border border-dark-black-15 bg-dark-black-06 px-5 py-4 transition-[data-[state=open]] xl:px-10 xl:py-5 xl:data-[state=open]:py-10 2xl:rounded-xl 2xl:px-12 2xl:py-6 2xl:data-[state=open]:py-12"
            >
              {/* Trigger */}
              <AccordionTrigger className="trigger group p-0 hover:no-underline [&[data-state=open]>.arrow]:rotate-180">
                <div className="flex items-center gap-x-1 xl:gap-x-2 2xl:gap-x-3">
                  <Typography variant="h3" className="font-semibold">
                    Season{" "}
                    {season.number < 10 ? `0${season.number}` : season.number}
                  </Typography>
                  <h5 className="text-sm font-medium text-grey-grey-60 xl:text-base 2xl:text-lg">
                    {season.episodes.length}{" "}
                    {season.episodes.length > 1 ? "Episodes" : "Episode"}
                  </h5>
                </div>
                <div className="arrow rounded-full border border-dark-black-15 bg-dark-black-08 p-3 transition-transform duration-200">
                  <ArrowDownIcon className="h-5 w-5 2xl:h-6 2xl:w-6" />
                </div>
              </AccordionTrigger>
              {/* Content */}
              <AccordionContent className="p-0 pt-5 md:pt-0">
                <Separator className="mt-6 hidden md:mb-7 md:block 2xl:mb-10" />
                <div className="space-y-5 md:space-y-7 2xl:space-y-10">
                  {season.episodes.map((episode, index) => (
                    <React.Fragment key={`episode-${index}`}>
                      <div className="relative flex items-center gap-x-4 rounded-lg bg-dark-black-08 p-5 md:gap-x-5 md:bg-transparent md:p-0 2xl:gap-x-11">
                        <div className="absolute right-5 top-14 text-3xl !font-semibold text-grey-grey-60 md:static md:text-4xl">
                          {episode.number > 10
                            ? episode.number
                            : `0${episode.number}`}
                        </div>
                        <VideoCard
                          image={episode.image}
                          title={episode.title}
                          description={episode.description}
                          duration={episode.duration}
                        />
                      </div>
                      <Separator className="mt-6 hidden last:hidden md:mb-7 md:block 2xl:mb-10" />
                    </React.Fragment>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Seasons;
