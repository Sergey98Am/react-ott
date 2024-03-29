import { useParams } from "react-router-dom";
import Container from "@/components/ui/Container";
import { useSingleMediaItem } from "@/hooks/media/useSingleMediaItem";
import Spinner from "@/components/icons/Spinner";
import MediaOverlayCard from "@/components/cards/MediaOverlayCard";
import FreeTrial from "@/components/FreeTrial";
import ctl from "@netlify/classnames-template-literals";
import Description from "./DetailPagesComponents/Description";
import ReleasedYear from "./DetailPagesComponents/ReleasedYear";
import AvailableLanguages from "./DetailPagesComponents/AvailableLanguages";
import Genres from "./DetailPagesComponents/Genres";
import Director from "./DetailPagesComponents/Director";
import Music from "./DetailPagesComponents/Music";
import Cast from "./DetailPagesComponents/Cast";
import Reviews from "./DetailPagesComponents/Reviews";
import Ratings from "./DetailPagesComponents/Ratings";
import Seasons from "./DetailPagesComponents/Show/Seasons";
import { supabase } from "@/services/supabaseClient";

// When there is a class reusing, used ctl()

const infoSectionClasses = ctl(
  `bg-dark-black-10
  border
  border-dark-black-15
  rounded-lg
  p-6
  sm:p-10
  2xl:rounded-xl
  2xl:p-12`,
);

const fieldContentDistanceClasses = ctl(
  `space-y-2 
  sm:space-y-2.5 
  2xl:space-y-3.5`,
);

const fieldLabelClasses = ctl(
  `title 
  text-grey-grey-60 
  flex
  items-center
  space-x-0.5
  2xl:space-x-1`,
);

const labelIconClasses = ctl(
  `h-5
  w-5 
  2xl:h-6 
  2xl:w-6`,
);

const ShowDetail = () => {
  const params = useParams();
  const { isLoading, single_media_item } = useSingleMediaItem(
    Number(params.id),
  );

  // singleMediaItemBanner image
  const { data: singleMediaItemBanner } = supabase.storage
    .from("images")
    .getPublicUrl(single_media_item?.banner);

  return (
    <div className="pb-20 pt-36 md:pb-28 2xl:pt-40">
      <Container className="space-y-24 2xl:space-y-32">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Spinner className="h-12 w-12 animate-spin lg:h-16 lg:w-16" />
          </div>
        ) : (
          <div className="space-y-14 sm:space-y-20 2xl:space-y-24">
            <MediaOverlayCard
              image={singleMediaItemBanner.publicUrl}
              title={single_media_item.title}
              description={single_media_item.description}
            />
            <div className="info grid grid-cols-12 gap-5">
              <div className="col-span-12 xl:col-span-8">
                {/* Here is used grid gap for hidden element */}
                <div className="flex flex-col gap-y-5 2xl:gap-y-7">
                  {/* Seasons and Episodes */}
                  <div className="hidden xl:!flex">
                    <Seasons
                      infoSectionClasses={infoSectionClasses}
                      seasons={single_media_item.seasons}
                    />
                  </div>

                  {/* Movie description */}
                  <div className="description hidden xl:!flex">
                    <Description
                      infoSectionClasses={infoSectionClasses}
                      fieldContentDistanceClasses={fieldContentDistanceClasses}
                      fieldLabelClasses={fieldLabelClasses}
                      single_media_item={single_media_item}
                    />
                  </div>

                  {/* Cast */}
                  <Cast
                    infoSectionClasses={infoSectionClasses}
                    actors={single_media_item.actors}
                  />

                  {/* Reviews */}
                  <Reviews
                    infoSectionClasses={infoSectionClasses}
                    fieldLabelClasses={fieldLabelClasses}
                    reviews={single_media_item.reviews}
                  />
                </div>
              </div>
              <div className="order-first col-span-12 space-y-5 xl:order-last xl:col-span-4 xl:space-y-0">
                {/* Seasons and Episodes */}
                <div className="block xl:hidden">
                  <Seasons
                    infoSectionClasses={infoSectionClasses}
                    seasons={single_media_item.seasons}
                  />
                </div>

                {/* Movie description */}
                <div className="description block xl:hidden">
                  <Description
                    infoSectionClasses={infoSectionClasses}
                    fieldContentDistanceClasses={fieldContentDistanceClasses}
                    fieldLabelClasses={fieldLabelClasses}
                    single_media_item={single_media_item}
                  />
                </div>

                <div
                  className={`${infoSectionClasses} space-y-5 hover:bg-dark-black-12 sm:space-y-6`}
                >
                  {/* Released year */}
                  <ReleasedYear
                    fieldLabelClasses={fieldLabelClasses}
                    fieldContentDistanceClasses={fieldContentDistanceClasses}
                    labelIconClasses={labelIconClasses}
                    single_media_item={single_media_item}
                  />

                  {/* Available languages */}
                  <AvailableLanguages
                    fieldLabelClasses={fieldLabelClasses}
                    fieldContentDistanceClasses={fieldContentDistanceClasses}
                    labelIconClasses={labelIconClasses}
                    languages={single_media_item.languages}
                  />

                  {/* Ratings */}
                  <Ratings
                    fieldLabelClasses={fieldLabelClasses}
                    fieldContentDistanceClasses={fieldContentDistanceClasses}
                    labelIconClasses={labelIconClasses}
                  />

                  {/* Genres */}
                  <Genres
                    fieldLabelClasses={fieldLabelClasses}
                    fieldContentDistanceClasses={fieldContentDistanceClasses}
                    labelIconClasses={labelIconClasses}
                    genres={single_media_item.genres}
                  />

                  {/* Director or directors */}
                  <Director
                    fieldLabelClasses={fieldLabelClasses}
                    fieldContentDistanceClasses={fieldContentDistanceClasses}
                    directors={single_media_item.directors}
                  />

                  {/* Musician on musicians */}
                  <Music
                    fieldLabelClasses={fieldLabelClasses}
                    fieldContentDistanceClasses={fieldContentDistanceClasses}
                    musicians={single_media_item.musicians}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        <FreeTrial />
      </Container>
    </div>
  );
};

export default ShowDetail;
