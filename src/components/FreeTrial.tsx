import Button from "./ui/Button";
import Typography from "./ui/Typography";

const FreeTrial = () => {
  return (
    <div
      className="relative z-10 flex flex-col items-center justify-center gap-y-12 overflow-hidden rounded-xl border border-dark-black-15 px-7 py-12 text-center lg:flex-row lg:justify-between lg:gap-y-0 lg:px-14 lg:py-20 lg:text-start 2xl:px-20 2xl:py-28"
      style={{
        backgroundImage: `url("./src/assets/Banner.jpg")`,
      }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, #0F0F0F 2.42%, rgba(20, 15, 15, 0.97) 25.46%, rgba(34, 14, 14, 0.91) 46.72%, rgba(229, 0, 0, 0.00) 168.98%)",
        }}
      ></div>
      <div className="flex flex-col gap-y-2.5 2xl:gap-y-3.5">
        <Typography variant="h2" className="2xl:text-6xl">
          Start your free trial today!
        </Typography>
        <Typography variant="body" className="text-sm xl:text-base 2xl:text-lg">
          This is a clear and concise call to action that encourages users to
          sign up for a free trial of StreamVibe.
        </Typography>
      </div>
      <Button>Start a Free Trail</Button>
    </div>
  );
};

export default FreeTrial;
