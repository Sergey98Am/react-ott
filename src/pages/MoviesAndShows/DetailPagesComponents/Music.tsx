import MemberCard from "@/components/cards/MemberCard";
import Typography from "@/components/ui/Typography";
import { Member as DirectorType } from "@/types/index";
import { supabase } from "@/services/supabaseClient";

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
      <Typography variant="h5" className={fieldLabelClasses}>
        Music
      </Typography>

      {/* Single movie or show musician(s) */}
      <div className="space-y-3">
        {musicians.map((musician, index) => {
          // Musician image
          const { data: musicianImage } = supabase.storage
            .from("images")
            .getPublicUrl(musician.image);

          // Musician item
          return (
            <MemberCard
              key={index}
              image={musicianImage.publicUrl}
              name={`${musician.first_name} ${musician.last_name}`}
              country={musician.countries.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Music;
