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
    <Card className="space-y-[30px] rounded-xl border border-dark-black-15 bg-dark-black-06 bg-gradient-to-bl from-[#e50000]/10 from-0% to-transparent to-50% p-6 transition-all hover:shadow-lg hover:shadow-primary-red-45 sm:p-10 2xl:p-12">
      {/* Image and title */}
      <CardHeader className="flex-row items-center space-x-4">
        <div className="w-fit rounded-xl bg-dark-black-12 p-2.5 sm:p-3 2xl:p-4">
          <Image
            src={icon}
            alt="ds"
            className="h-6 w-6 sm:h-[30px] sm:w-[30px] 2xl:h-[40px] 2xl:w-[40px]"
          />
        </div>
        <Typography variant="h3">{title}</Typography>
      </CardHeader>

      {/* Description */}
      <Typography variant="body">{description}</Typography>
    </Card>
  );
};

export default FeatureCard;
