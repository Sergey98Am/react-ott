import { cn, formatNumber } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "../ui/Card";
import CustomRating from "../ui/CustomRating";
import Typography from "../ui/Typography";

interface ReviewCardProps {
  userName: string;
  userCountry: string;
  reviewRating: number;
  reviewDescription: string;
  className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  userName,
  userCountry,
  reviewRating,
  reviewDescription,
  className,
}) => {
  return (
    <Card
      className={cn(
        `space-y-4 rounded-xl border border-dark-black-15 bg-dark-black-06 p-6 shadow-none sm:p-7 2xl:space-y-5 2xl:p-10`,
        className,
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between">
        {/* User name and country */}
        <div className="user">
          <Typography
            variant="h4"
            className="text-base font-medium sm:text-lg 2xl:text-xl"
          >
            {userName}
          </Typography>
          <Typography variant="h5" className="text-grey-grey-60">
            {userCountry}
          </Typography>
        </div>

        {/* Stars */}
        <div className="rating">
          {/* Stars */}
          <div className="flex items-center space-x-1 rounded-3xl border border-dark-black-15 bg-dark-black-08 px-2 py-1.5 text-xs sm:px-2.5 2xl:text-sm ">
            <CustomRating value={Number(reviewRating)} readOnly />
            <span className="font-medium text-grey-grey-60">
              {formatNumber(Number(reviewRating))}
            </span>
          </div>
        </div>
      </CardHeader>

      {/* Description */}
      <CardContent className="p-0">
        <Typography variant="body">{reviewDescription}</Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
