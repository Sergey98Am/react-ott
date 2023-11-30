import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import Image from "../ui/Image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const GenreCard = () => {
  return (
    <div>
      <Card className="rounded-xl border border-dark-black-15 bg-dark-black-10 p-[30px]">
        <CardContent className="rounder-[18px] relative p-0">
          <Image
            src="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
            alt="ddd"
            className="aspect-[47/50] object-cover"
          ></Image>
          <div
            className="absolute bottom-0 left-0 right-0 top-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(26, 26, 26, 0.00) 0%, #1A1A1A 101.79%)",
            }}
          ></div>
        </CardContent>
        <CardFooter className="p-0">
          <button className="flex w-full items-center justify-between text-lg font-semibold">
            <span>Action</span> <ArrowRightIcon className="h-[30px] w-[30px]" />
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GenreCard;