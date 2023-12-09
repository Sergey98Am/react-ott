import GenresSlider from "@/components/GenresSlider";
import Hero from "@/components/homepage/Hero";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { PlayIcon } from "@heroicons/react/24/solid";

const Home = () => {
  return (
    <div className="space-y-[100px] xl:space-y-[150px] 2xl:space-y-[200px]">
      <Hero />
      <Container className="space-y-[80px] xl:space-y-[120px] 2xl:space-y-[150px]">
        <GenresSlider />
        <div>
          <Button className="gap-1">
            <PlayIcon className="h-6 w-6 2xl:h-7 2xl:w-7" /> Start Watching Now
          </Button>
          <Button>Choose Plan</Button>
          <Button variant="dark">Start Free Trial</Button>
        </div>
      </Container>
    </div>
  );
};

export default Home;
