import MediaOverlayCard from "@/components/cards/MediaOverlayCard";
import Container from "@/components/ui/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import ctl from "@netlify/classnames-template-literals";
import CarouselDefault from "@/components/carousels/CarouselDefault";
import ShowsList from "./ShowsList";
import MoviesList from "./MoviesList";
import { useTopMediaItems } from "@/hooks/media/useTopMediaItems";
import FreeTrial from "@/components/FreeTrial";

// When there is a class reusing, used ctl()

const movieAndShowClasses = ctl(
  `relative 
    rounded-xl 
    border 
    border-dark-black-15 
    p-10 
    2xl:p-12 
    2xl:pt-16`,
);

const movieAndShowTextClasses = ctl(
  `absolute 
    top-[-20px] 
    rounded-md 
    bg-primary-red-45 
    px-4 py-2 
    font-semibold 
    2xl:rounded-lg 
    2xl:px-6 
    2xl:py-2.5 
    2xl:text-xl`,
);

// 1 is Movie and 2 is Show

const MoviesAndShows = () => {
  const { isLoading, top_media_items } = useTopMediaItems("Movie");

  return (
    <div className="pb-20 pt-36 md:pb-28 2xl:pt-40">
      <Container className="space-y-24 2xl:space-y-32">
        {/* Movies slider */}
        <CarouselDefault isLoading={isLoading}>
          <div className="backface-hidden flex touch-pan-y">
            {top_media_items?.map((movie) => {
              return (
                // Carousel item
                <div
                  key={movie.id}
                  className="w-full flex-shrink-0 flex-grow-0"
                >
                  <MediaOverlayCard
                    className="md:!pb-[88px]"
                    title={movie.title}
                    description={movie.description}
                    image={movie.banner}
                  />
                </div>
              );
            })}
          </div>
        </CarouselDefault>

        {/* Movies and Shows */}
        <div className="movies-and-shows">
          {/* For Desktop */}
          <div className="hidden space-y-32 md:block 2xl:space-y-36">
            <div className={`movies ${movieAndShowClasses}`}>
              <div className={movieAndShowTextClasses}>Movies</div>
              <MoviesList />
            </div>
            <div className={`shows ${movieAndShowClasses}`}>
              <div className={movieAndShowTextClasses}>Shows</div>
              <ShowsList />
            </div>
          </div>
          {/* For Mobile */}
          <div className="for-mobile md:hidden">
            <Tabs defaultValue="movies" className="space-y-12">
              <TabsList className="w-full">
                <TabsTrigger value="movies" className="w-6/12">
                  Movies
                </TabsTrigger>
                <TabsTrigger value="shows" className="w-6/12">
                  Shows
                </TabsTrigger>
              </TabsList>
              <TabsContent value="movies">
                <MoviesList />
              </TabsContent>
              <TabsContent value="shows">
                <ShowsList />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <FreeTrial />
      </Container>
    </div>
  );
};

export default MoviesAndShows;
