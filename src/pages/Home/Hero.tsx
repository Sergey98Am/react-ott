import Image from "../../components/ui/Image";
import Banner from "@/assets/Banner.jpg";
import Typography from "../../components/ui/Typography";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { PlayIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <div>
      {/* Image */}
      <div className="relative">
        <div className="aspect-ratio-portrait sm:aspect-ratio-cinemascope">
          <Image
            src={Banner}
            alt="Photo by Drew Beamer"
            className="h-full w-full object-cover"
          />
        </div>
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

      {/* Content */}
      <Container className="z-1 mt-[-70px] flex justify-center">
        <div className="relative flex max-w-[1096px] flex-col items-center justify-center space-y-[30px] self-stretch text-center xl:space-y-10 2xl:space-y-[50px]">
          {/* Title and description */}
          <div className="text-content relative space-y-2.5 2xl:space-y-3.5">
            <Typography variant="h1">The Best Streaming Experience</Typography>
            <Typography variant="body" className="text-sm 2xl:text-lg">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
              You can also create your own watchlists, so you can easily find
              the content you want to watch.
            </Typography>
          </div>

          {/* Watching button */}
          <Button className="space-x-1">
            <PlayIcon className="h-6 w-6 2xl:h-7 2xl:w-7" />
            <span>Start Watching Now</span>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
