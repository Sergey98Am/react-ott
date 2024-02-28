import React from "react";
import Typography from "@/components/ui/Typography";

interface DescriptionProps {
  infoSectionClasses: string;
  fieldContentDistanceClasses: string;
  fieldLabelClasses: string;
  single_media_item: {
    description: string;
  };
}

const Description: React.FC<DescriptionProps> = ({
  infoSectionClasses,
  fieldContentDistanceClasses,
  fieldLabelClasses,
  single_media_item,
}) => {
  return (
    <div
      className={`${infoSectionClasses} ${fieldContentDistanceClasses} w-full hover:bg-dark-black-12`}
    >
      {/* Label */}
      <Typography variant="h5" className={fieldLabelClasses}>
        Description
      </Typography>

      {/* Single movie or show description */}
      <Typography
        variant="body"
        className={`${fieldLabelClasses} font-medium text-absolute-white`}
      >
        {single_media_item.description}
      </Typography>
    </div>
  );
};

export default Description;
