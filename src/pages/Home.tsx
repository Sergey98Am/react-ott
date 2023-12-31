import FAQ from "@/components/FAQ";
import FreeTrial from "@/components/FreeTrial";
import Pricing from "@/components/Pricing";
import Features from "@/components/homepage/Features";
import Hero from "@/components/homepage/Hero";
import Container from "@/components/ui/Container";
import { useGenres } from "@/hooks/useGenres";
import GenreCard from "@/components/cards/GenreCard";
import CarouselOutsideControls from "@/components/carousels/CarouselOutsideControls";
import ctl from "@netlify/classnames-template-literals";

const carouselItemsParentClasses = ctl(
  `backface-hidden 
  ml-[-20px] 
  flex 
  touch-pan-y
  2xl:ml-[-30px]`,
);

const carouselItemClasses = ctl(
  `relative 
  w-[200px] 
  min-w-0 
  flex-shrink-0 
  flex-grow-0 
  pl-5 
  lg:w-1/5
  2xl:pl-[30px]`,
);

const Home = () => {
  const { isLoading, genres } = useGenres();

  return (
    <div>
      <Hero />
      <Container className="space-y-[80px] py-[100px] xl:space-y-[120px] xl:py-[150px] 2xl:space-y-[150px] 2xl:py-[200px]">
        {/* <GenresSlider /> */}
        <div className="genres">
          <CarouselOutsideControls
            headingTitle="Explore our wide variety of categories"
            headingDescription="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
            isLoading={isLoading}
          >
            <div className={carouselItemsParentClasses}>
              {genres?.map((genre) => {
                return (
                  <div className={carouselItemClasses} key={genre.id}>
                    <GenreCard title={genre.title} image={genre.image} />
                  </div>
                );
              })}
            </div>
          </CarouselOutsideControls>
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
