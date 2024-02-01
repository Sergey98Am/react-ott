import Button from "../ui/Button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/Card";
import Typography from "../ui/Typography";

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  frequency: string;
}

const PricingCard: React.FC<PricingCardProps> = (props) => {
  return (
    <Card className="flex flex-col gap-y-[30px] border-dark-black-15 bg-dark-black-10 p-6 sm:gap-y-10 sm:p-10 2xl:gap-y-[50px] 2xl:p-[50px]">
      {/* Title and description */}
      <CardHeader className="info gap-y-2.5 sm:gap-y-3 2xl:gap-y-4">
        <Typography variant="h3" className="font-bold">
          {props.title}
        </Typography>
        <Typography variant="body">{props.description}</Typography>
      </CardHeader>

      {/* Price with frequency */}
      <CardContent className="price p-0">
        <div className="flex items-end">
          <Typography variant="h2" className="leading-[73%]">
            <span className="font-semibold">${props.price}</span>
            <Typography
              variant="span"
              className="text-sm text-grey-grey-60 sm:text-base 2xl:text-lg"
            >
              /{props.frequency}
            </Typography>
          </Typography>
        </div>
      </CardContent>

      {/* Actions */}
      <CardFooter className="actions flex gap-x-3 self-stretch p-0 2xl:gap-x-5">
        <Button
          variant="dark"
          className="flex-basis-0 flex-shrink-0 flex-grow px-0"
        >
          Start Free Trial
        </Button>
        <Button className="flex-basis-0 flex-shrink-0 flex-grow px-0">
          Choose Plan
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
