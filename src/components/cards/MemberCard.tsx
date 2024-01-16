import ctl from "@netlify/classnames-template-literals";
import { Card, CardContent } from "../ui/Card";
import Image from "../ui/Image";
import Typography from "../ui/Typography";
import { Link } from "react-router-dom";

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
  const cardClasses = ctl(
    `w-full 
    rounded-lg 
    bg-dark-black-08 
    p-2.5 
    sm:p-3 
    2xl:p-3.5`,
  );

  const cardContent = (
    <CardContent className="flex items-center gap-x-2  p-0">
      <div className="w-14">
        <div className="aspect-ratio-square rounded-md">
          <Image src={image} alt="dddsa" className="object-cover" />
        </div>
      </div>
      <div className="info">
        <Typography
          variant="body"
          className="text-base !font-medium text-absolute-white 2xl:text-lg"
        >
          {name}
        </Typography>
        <Typography
          variant="body"
          className="text-sm !font-medium 2xl:text-base"
        >
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
