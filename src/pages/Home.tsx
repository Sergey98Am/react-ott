import FAQ from "@/components/FAQ";
import FreeTrial from "@/components/FreeTrial";
import GenresSlider from "@/components/GenresSlider";
import Pricing from "@/components/Pricing";
import Features from "@/components/homepage/Features";
import Hero from "@/components/homepage/Hero";
import Container from "@/components/ui/Container";

const Home = () => {
  return (
    <div>
      <Hero />
      <Container className="space-y-[80px] py-[100px] xl:space-y-[120px] xl:py-[150px] 2xl:space-y-[150px] 2xl:py-[200px]">
        <GenresSlider />
        <Features />
        <FAQ />
        <Pricing />
        <FreeTrial />
      </Container>
    </div>
  );
};

export default Home;
