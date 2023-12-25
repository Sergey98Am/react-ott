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
      <Container className="space-y-[150px]">
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
          <div className="for-desktop hidden md:block">
            <div className="movies">
              <MoviesList />
            </div>
            <div className="shows">
              <ShowsList />
            </div>
          </div>
          {/* For Mobile */}
          <div className="for-mobile md:hidden">
            <Tabs defaultValue="account">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
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
