import FeatureCard from "@/components/cards/FeatureCard";
import { features } from "@/constants";
import Typography from "../../components/ui/Typography";

const Features = () => {
  return (
    <div className="flex flex-col gap-y-10 xl:gap-y-[60px] 2xl:gap-y-20">
      {/* Title and description */}
      <div className="flex flex-col gap-y-2 md:w-10/12 xl:gap-y-2.5 2xl:gap-y-3.5">
        <Typography variant="h2" className="text-xl xl:text-4xl 2xl:text-5xl">
          We Provide you streaming experience across various devices.
        </Typography>
        <Typography variant="body">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </Typography>
      </div>

      {/* Features list */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-[30px]">
        {features?.map((feature, index) => (
          // Feature item
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
