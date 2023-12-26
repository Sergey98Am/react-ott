import MediaOverlayCard from "@/components/cards/MediaOverlayCard";
import OneItemSlider, { Slide } from "@/components/sliders/OneItemSlider";
import Container from "@/components/ui/Container";
import { useMovies } from "@/hooks/useMovies";
import MoviesList from "./MoviesList";
import ShowsList from "./ShowsList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

const Movies = () => {
  const { isLoading, movies } = useMovies();

  return (
    <div className="pb-20 pt-36 md:pb-28 2xl:pt-40">
      <Container className="space-y-24 2xl:space-y-32">
        {/* Movies slider */}
        <OneItemSlider isLoading={isLoading}>
          {movies?.map((movie) => {
            return (
              <Slide key={movie.id}>
                <MediaOverlayCard
                  className="md:!pb-[88px]"
                  title={movie.title}
                  description={movie.description}
                  image={movie.image}
                />
              </Slide>
            );
          })}
        </OneItemSlider>
        {/* Movies and Shows */}
        <div className="movies-and-shows">
          {/* For Desktop */}
          <div className="for-desktop hidden space-y-32 md:block 2xl:space-y-36">
            <div className="movies relative rounded-xl border border-dark-black-15 p-10 2xl:p-12 2xl:pt-16">
              <div className="absolute top-[-20px] rounded-md bg-primary-red-45 px-4 py-2 font-semibold 2xl:rounded-lg 2xl:px-6 2xl:py-2.5 2xl:text-xl">
                Movies
              </div>
              <MoviesList />
            </div>
            <div className="shows relative rounded-xl border border-dark-black-15 p-10 2xl:p-12 2xl:pt-16">
              <div className="absolute top-[-20px] rounded-md bg-primary-red-45 px-4 py-2 font-semibold 2xl:rounded-lg 2xl:px-6 2xl:py-2.5 2xl:text-xl">
                Shows
              </div>
              <ShowsList />
            </div>
          </div>
          {/* For Mobile */}
          <div className="for-mobile md:hidden">
            <Tabs defaultValue="movies">
              <TabsList className="w-full">
                <TabsTrigger value="movies" className="w-6/12">
                  Movies
                </TabsTrigger>
                <TabsTrigger value="shows" className="w-6/12">
                  Shows
                </TabsTrigger>
              </TabsList>
              <TabsContent value="movies">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="shows">
                Change your password here.
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Movies;
