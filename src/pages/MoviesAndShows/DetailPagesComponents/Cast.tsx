import React from "react";
import Image from "@/components/ui/Image";
import CarouselOutsideTopArrows from "@/components/carousels/CarouselOutsideTopArrows";
import { supabase } from "@/services/supabaseClient";

interface Actor {
  image: string;
}

interface CastProps {
  infoSectionClasses: string;
  actors: Actor[];
}

const Cast: React.FC<CastProps> = ({ infoSectionClasses, actors }) => {
  return (
    <div className={`${infoSectionClasses} cast hover:bg-dark-black-12`}>
      {/* Single movie or show actors */}
      <CarouselOutsideTopArrows headingTitle="Cast">
        <div className="backface-hidden ml-[-10px] flex touch-pan-y 2xl:ml-[-20px]">
          {actors.map((actor, index) => {
            // Actor image
            const { data: actorImage } = supabase.storage
              .from("images")
              .getPublicUrl(actor.image);

            // Actor item
            return (
              <div
                key={index}
                className="relative w-[79px] min-w-0 flex-shrink-0 flex-grow-0 overflow-hidden pl-2.5 sm:w-[100px] 2xl:w-[122px]  2xl:pl-5"
              >
                <div>
                  <div className="aspect-ratio-square">
                    <Image
                      src={actorImage.publicUrl}
                      alt="fds"
                      className="rounded-lg object-cover 2xl:rounded-xl"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CarouselOutsideTopArrows>
    </div>
  );
};

export default Cast;
