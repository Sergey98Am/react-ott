import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Badge } from "../ui/Badge";
import Typography from "../ui/Typography";

interface GenreCardProps {
  title: string;
  image: string;
  topBadge?: boolean;
}

const GenreCard: React.FC<GenreCardProps> = ({
  title,
  image,
  topBadge = false,
}) => {
  return (
    <div>
      <Card className="rounded-xl border border-dark-black-15 bg-dark-black-10 p-5 sm:px-6 xl:p-[30px]">
        {/* Image */}
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

        {/* Title */}
        <CardFooter className="justify-between p-0">
          <div className="text flex flex-col items-start gap-y-2">
            {topBadge && <Badge>Top 10 In</Badge>}
            <Typography
              variant="h4"
              className="flex w-full items-center justify-between capitalize"
            >
              {title}
            </Typography>
          </div>
          <ArrowRightIcon className="h-[30px] w-[30px]" />
        </CardFooter>
      </Card>
    </div>
  );
};

export default GenreCard;
