import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface GenreCardProps {
  title: string;
  image: string;
}

const GenreCard: React.FC<GenreCardProps> = ({ title, image }) => {
  return (
    <div>
      <Card className="rounded-xl border border-dark-black-15 bg-dark-black-10 p-5 sm:px-6 xl:p-[30px]">
        <CardContent className="relative rounded-[18px] p-0">
          <div
            className="aspect-ratio-short-portrait"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(26, 26, 26, 0.00)0%, #1A1A1A 102.79%),
              url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          ></div>
        </CardContent>
        <CardFooter className="p-0">
          <button className="flex w-full items-center justify-between text-lg font-semibold capitalize">
            <span>{title}</span>
            <ArrowRightIcon className="h-[30px] w-[30px]" />
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GenreCard;
