import FeatureCard from "@/components/cards/FeatureCard";
import { features } from "@/constants";
import Typography from "../ui/Typography";
import ctl from "@netlify/classnames-template-literals";

const sectionContainer = ctl(
  `section-container
  flex 
  flex-col 
  gap-y-10
  xl:gap-y-[60px]
  2xl:gap-y-20`,
);

const infoClasses = ctl(
  `info 
  flex 
  flex-col 
  gap-y-2
  md:w-10/12
  xl:gap-y-2.5
  2xl:gap-y-3.5`,
);

const gridClasses = ctl(
  `grid 
  grid-cols-1 
  gap-5 
  sm:grid-cols-2 
  lg:grid-cols-3 
  2xl:gap-[30px]`,
);

const Features = () => {
  return (
    <div className={sectionContainer}>
      {/* Title and description */}
      <div className={infoClasses}>
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
      <div className={gridClasses}>
        {features?.map((feature, index) => (
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
