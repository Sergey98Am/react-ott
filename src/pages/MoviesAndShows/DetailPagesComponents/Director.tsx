import MemberCard from "@/components/cards/MemberCard";
import Typography from "@/components/ui/Typography";
import { Member as MusicianType } from "@/types/index";

interface DirectorProps {
  fieldLabelClasses: string;
  fieldContentDistanceClasses: string;
  directors: MusicianType[];
}

const Director: React.FC<DirectorProps> = ({
  fieldLabelClasses,
  fieldContentDistanceClasses,
  directors,
}) => {
  return (
    <div className={`director ${fieldContentDistanceClasses}`}>
      {/* Label */}
      <Typography variant="body" className={fieldLabelClasses}>
        Director
      </Typography>

      {/* Director */}
      <div className="gap-y-3">
        {directors.map((director, index) => (
          <MemberCard
            key={index}
            image={director.image}
            name={`${director.first_name} ${director.last_name}`}
            country={director.countries.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Director;
