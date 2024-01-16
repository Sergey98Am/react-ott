import MemberCard from "@/components/cards/MemberCard";
import Typography from "@/components/ui/Typography";
import { Member as DirectorType } from "@/types/index";

interface MusicProps {
  fieldLabelClasses: string;
  fieldContentDistanceClasses: string;
  musicians: DirectorType[];
}

const Music: React.FC<MusicProps> = ({
  fieldLabelClasses,
  fieldContentDistanceClasses,
  musicians,
}) => {
  return (
    <div className={`musician ${fieldContentDistanceClasses}`}>
      {/* Label */}
      <Typography variant="body" className={fieldLabelClasses}>
        Music
      </Typography>

      {/* Musician */}
      <div className="gap-y-3">
        {musicians.map((director, index) => (
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

export default Music;
