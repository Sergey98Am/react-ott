import FAQ from "@/components/FAQ";
import FreeTrial from "@/components/FreeTrial";
import Pricing from "@/components/Pricing";
import Features from "@/components/homepage/Features";
import Hero from "@/components/homepage/Hero";
import Container from "@/components/ui/Container";
import { useGenres } from "@/hooks/useGenres";
import GenreCard from "@/components/cards/GenreCard";
import MultiItemsSlider from "@/components/sliders/MultiItemsSlider";
import { Slide } from "@/components/sliders/MultiItemsSlider";

const Home = () => {
  const { isLoading, genres } = useGenres();

  return (
    <div>
      <Hero />
      <Container className="space-y-[80px] py-[100px] xl:space-y-[120px] xl:py-[150px] 2xl:space-y-[150px] 2xl:py-[200px]">
        {/* <GenresSlider /> */}
        <div className="genres">
          <MultiItemsSlider
            headingTitle="Explore our wide variety of categories"
            headingDescription="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
            isLoading={isLoading}
          >
            {genres?.map((genre) => {
              return (
                <Slide className="w-[200px]" key={genre.id}>
                  <GenreCard title={genre.title} image={genre.image} />
                </Slide>
              );
            })}
          </MultiItemsSlider>
        </div>
        <Features />
        <FAQ />
        <Pricing />
        <FreeTrial />
      </Container>
    </div>
  );
};

export default Home;
