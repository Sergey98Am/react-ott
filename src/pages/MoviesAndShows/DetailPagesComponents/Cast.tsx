import React from "react";
import Image from "@/components/ui/Image";
import CarouselOutsideTopArrows from "@/components/carousels/CarouselOutsideTopArrows";

interface Actor {
  image: string;
}

interface CastProps {
  infoSectionClasses: string;
  actors: Actor[];
}

const Cast: React.FC<CastProps> = ({ infoSectionClasses, actors }) => {
  return (
    <div className={`${infoSectionClasses} cast`}>
      {/* Single movie or show actors */}
      <CarouselOutsideTopArrows headingTitle="Cast">
        <div className="backface-hidden ml-[-10px] flex touch-pan-y 2xl:ml-[-20px]">
          {actors.map((actor, index) => (
            // Actor item
            <div
              key={index}
              className="relative w-[79px] min-w-0 flex-shrink-0 flex-grow-0 overflow-hidden pl-2.5 sm:w-[100px] 2xl:w-[122px]  2xl:pl-5"
            >
              <div>
                <div className="aspect-ratio-square">
                  <Image
                    src={actor.image}
                    alt="fds"
                    className="rounded-lg object-cover 2xl:rounded-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CarouselOutsideTopArrows>
    </div>
  );
};

export default Cast;
