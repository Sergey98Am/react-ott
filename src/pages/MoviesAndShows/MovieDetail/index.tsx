import { useParams } from "react-router-dom";
import Container from "@/components/ui/Container";
import { useSingleMediaItem } from "@/hooks/media/useSingleMediaItem";
import Spinner from "@/components/icons/Spinner";
import MediaOverlayCard from "@/components/cards/MediaOverlayCard";
import FreeTrial from "@/components/FreeTrial";
import ctl from "@netlify/classnames-template-literals";
import Typography from "@/components/ui/Typography";
import { StarIcon } from "@heroicons/react/24/outline";
import Description from "../DetailPagesComponents/Description";
import ReleasedYear from "../DetailPagesComponents/ReleasedYear";
import AvailableLanguages from "../DetailPagesComponents/AvailableLanguages";
import Genres from "../DetailPagesComponents/Genres";
import Director from "../DetailPagesComponents/Director";
import { Role, Member } from "@/types/index";
import Music from "../DetailPagesComponents/Music";
import Cast from "../DetailPagesComponents/Cast";
import Reviews from "../DetailPagesComponents/Reviews";

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
  `flex
  flex-col 
  gap-y-2 
  sm:gap-y-2.5 
  2xl:gap-y-3.5`,
);

const fieldLabelClasses = ctl(
  `title 
  text-sm 
  !font-medium 
  text-grey-grey-60 
  flex
  items-center
  gap-x-0.5
  sm:text-base 
  2xl:text-lg
  2xl:gap-x-1`,
);

const labelIconClasses = ctl(
  `h-5
  w-5 
  2xl:h-6 
  2xl:w-6`,
);

const MovieDetail = () => {
  const params = useParams();
  const { isLoading, single_media_item } = useSingleMediaItem(
    Number(params.id),
  );
  const directors: Member[] = single_media_item
    ? single_media_item.members.filter((member: Member) =>
        member.roles.some((role: Role) => role.name === "director"),
      )
    : [];
  const musicians: Member[] = single_media_item
    ? single_media_item.members.filter((member: Member) =>
        member.roles.some((role: Role) => role.name === "musician"),
      )
    : [];
  const actors: Member[] = single_media_item
    ? single_media_item.members.filter((member: Member) =>
        member.roles.some((role: Role) => role.name === "actor"),
      )
    : [];

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
              image={single_media_item.banner}
              title={single_media_item.title}
              description={single_media_item.description}
            />
            <div className="info grid grid-cols-12 gap-5">
              <div className="col-span-12 flex flex-col gap-y-5 xl:col-span-8 2xl:gap-y-7">
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
                <Cast infoSectionClasses={infoSectionClasses} actors={actors} />

                {/* Reviews */}
                <Reviews
                  infoSectionClasses={infoSectionClasses}
                  fieldLabelClasses={fieldLabelClasses}
                  reviews={single_media_item.reviews}
                />
              </div>
              <div className="order-first col-span-12 flex flex-col gap-y-5 xl:order-last xl:col-span-4">
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
                  className={`${infoSectionClasses} flex flex-col gap-y-5 sm:gap-y-6`}
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
                  <div className="ratings">
                    {/* Label */}
                    <Typography variant="body" className={fieldLabelClasses}>
                      <span>
                        <StarIcon className={labelIconClasses} />
                      </span>
                      <span>Ratings</span>
                    </Typography>
                  </div>

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
                    directors={directors}
                  />

                  {/* Musician on musicians */}
                  <Music
                    fieldLabelClasses={fieldLabelClasses}
                    fieldContentDistanceClasses={fieldContentDistanceClasses}
                    musicians={musicians}
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

export default MovieDetail;
