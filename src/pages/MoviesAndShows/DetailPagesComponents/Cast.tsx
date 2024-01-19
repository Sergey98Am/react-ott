import CarouselOutsideTopArrows from "@/components/carousels/CarouselOutsideTopArrows";
import Image from "@/components/ui/Image";
import ctl from "@netlify/classnames-template-literals";
import React from "react";

const carouselItemsParentClasses = ctl(
  `backface-hidden 
    ml-[-10px] 
    flex 
    touch-pan-y
    2xl:ml-[-20px]`,
);

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
      <CarouselOutsideTopArrows headingTitle="Cast">
        <div className={carouselItemsParentClasses}>
          {actors.map((actor, index) => (
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
