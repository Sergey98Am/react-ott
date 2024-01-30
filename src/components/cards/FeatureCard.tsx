import { Card, CardHeader } from "@/components/ui/Card";
import Image from "../ui/Image";
import Typography from "../ui/Typography";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Card
      className="flex flex-col gap-[30px] rounded-xl border border-dark-black-15 p-6 sm:p-10 2xl:p-12"
      style={{
        background:
          "linear-gradient(222deg, rgba(229, 0, 0, 0.50) -208.03%, rgba(229, 0, 0, 0.00) 41.32%), #0F0F0F",
      }}
    >
      <CardHeader className="flex-row items-center gap-x-4">
        <div className="w-fit rounded-xl bg-dark-black-12 p-2.5 sm:p-3 2xl:p-4">
          <Image
            src={icon}
            alt="ds"
            className="h-6 w-6 sm:h-[30px] sm:w-[30px] 2xl:h-[40px] 2xl:w-[40px]"
          />
        </div>
        <Typography variant="h3">{title}</Typography>
      </CardHeader>
      <Typography variant="body">{description}</Typography>
    </Card>
  );
};

export default FeatureCard;
