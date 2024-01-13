import React from "react";
import Typography from "@/components/ui/Typography";

interface DescriptionProps {
  infoSectionClasses: string;
  fieldContentDistanceClasses: string;
  fieldLabelClasses: string;
  single_movie: {
    description: string;
  };
}

const Description: React.FC<DescriptionProps> = ({
  infoSectionClasses,
  fieldContentDistanceClasses,
  fieldLabelClasses,
  single_movie,
}) => {
  return (
    <div className={`${infoSectionClasses} ${fieldContentDistanceClasses}`}>
      {/* Label */}
      <Typography variant="body" className={fieldLabelClasses}>
        Description
      </Typography>

      {/* Description */}
      <Typography
        variant="body"
        className={`${fieldLabelClasses} text-absolute-white`}
      >
        {single_movie.description}
      </Typography>
    </div>
  );
};

export default Description;
