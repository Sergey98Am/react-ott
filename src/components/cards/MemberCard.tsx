import ctl from "@netlify/classnames-template-literals";
import { Card, CardContent } from "../ui/Card";
import Image from "../ui/Image";
import Typography from "../ui/Typography";
import { Link } from "react-router-dom";

const cardClasses = ctl(
  `w-full 
  rounded-lg 
  bg-dark-black-08 
  p-2.5 
  hover:bg-dark-black-10
  sm:p-3 
  2xl:p-3.5`,
);

interface MemberCardProps {
  to?: string;
  image: string;
  name: string;
  country: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  to,
  image,
  name,
  country,
}) => {
  // Content
  const cardContent = (
    <CardContent className="flex items-center space-x-2 p-0">
      {/* Member image */}
      <div className="w-14">
        <div className="aspect-ratio-square rounded-md">
          <Image src={image} alt="dddsa" className="object-cover" />
        </div>
      </div>

      {/* Member name and country */}
      <div className="info">
        <Typography
          variant="h5"
          className="text-base text-absolute-white 2xl:text-lg"
        >
          {name}
        </Typography>
        <Typography variant="h5" className="text-grey-grey-60">
          From {country}
        </Typography>
      </div>
    </CardContent>
  );

  return (
    <Card className="border border-dark-black-15">
      {to ? (
        <Link to={to}>
          <div className={cardClasses}>{cardContent}</div>
        </Link>
      ) : (
        <div className={cardClasses}>{cardContent}</div>
      )}
    </Card>
  );
};

export default MemberCard;
