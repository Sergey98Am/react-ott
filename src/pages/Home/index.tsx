import FAQ from "@/components/FAQ";
import FreeTrial from "@/components/FreeTrial";
import Pricing from "@/components/Pricing";
import Features from "@/pages/Home/Features";
import Hero from "@/pages/Home/Hero";
import Container from "@/components/ui/Container";
import { useGenres } from "@/hooks/useGenres";
import GenreCard from "@/components/cards/GenreCard";
import CarouselOutsideTopControls from "@/components/carousels/CarouselOutsideTopControls";
import { supabase } from "@/services/supabaseClient";

const Home = () => {
  const { isLoading, genres } = useGenres();

  return (
    <div>
      <Hero />
      <Container className="space-y-[80px] py-[100px] xl:space-y-[120px] xl:py-[150px] 2xl:space-y-[150px] 2xl:py-[200px]">
        {/* Genres */}
        <div className="genres">
          {/* Carousel */}
          <CarouselOutsideTopControls
            headingTitle="Explore our wide variety of categories"
            headingDescription="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
            isLoading={isLoading}
          >
            {/* Carousel item wrapper */}
            <div className="backface-hidden ml-[-20px] flex touch-pan-y 2xl:ml-[-30px]">
              {genres?.map((genre) => {
                // Movie image""
                const { data: genreImage } = supabase.storage
                  .from("images")
                  .getPublicUrl(genre.image, {
                    transform: {
                      width: 400,
                    },
                  });

                return (
                  // Carousel item
                  <div
                    className="relative w-[200px] min-w-0 flex-shrink-0  flex-grow-0 pl-5 lg:w-1/5 2xl:pl-[30px]"
                    key={genre.id}
                  >
                    <GenreCard
                      title={genre.title}
                      image={genreImage.publicUrl}
                    />
                  </div>
                );
              })}
            </div>
          </CarouselOutsideTopControls>
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
