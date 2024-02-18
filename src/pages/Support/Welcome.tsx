import Image from "@/components/ui/Image";
import Typography from "@/components/ui/Typography";
import image from "@/assets/cinema.jpg";

const Welcome = () => {
  return (
    <div className="space-y-7 xl:space-y-10 2xl:space-y-12">
      <div className="info space-y-2 2xl:space-y-3">
        <Typography variant="h1" className="text-4xl xl:text-5xl 2xl:text-6xl">
          Welcome to our support page!
        </Typography>
        <Typography variant="body">
          We're here to help you with any problems you may be having with our
          product.
        </Typography>
      </div>
      <div className="image">
        <div className="aspect-ratio-square rounded border-4 border-dark-black-15 2xl:rounded-md">
          <Image src={image} alt="sa" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
