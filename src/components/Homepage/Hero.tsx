import Image from "../ui/Image";
import Banner from "@/assets/Banner.jpg";
import Typography from "../ui/Typography";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { PlayIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={Banner}
          alt="Photo by Drew Beamer"
          className="aspect-[39/50] object-cover sm:aspect-[1920/860]"
        />
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(20, 20, 20, 0.00) 0%, #141414 100%), linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0.00) 100%)",
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
          }}
        ></div>
      </div>
      <Container className="z-1 mt-[-70px] flex justify-center">
        <div className="relative flex max-w-[1096px] flex-col items-center justify-center gap-[30px] self-stretch text-center xl:gap-10 2xl:gap-[50px]">
          <div className="text-content relative flex flex-col gap-2.5 2xl:gap-3.5">
            <Typography variant="h1">The Best Streaming Experience</Typography>
            <Typography variant="body">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
              You can also create your own watchlists, so you can easily find
              the content you want to watch.
            </Typography>
          </div>
          <Button className="gap-1">
            <PlayIcon className="h-6 w-6 2xl:h-7 2xl:w-7" /> Start Watching Now
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
