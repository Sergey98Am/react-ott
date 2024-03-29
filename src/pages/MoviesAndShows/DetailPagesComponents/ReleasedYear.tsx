import Typography from "@/components/ui/Typography";
import { getYear } from "@/lib/utils";
import { CalendarIcon } from "@heroicons/react/24/outline";
import React from "react";

interface ReleasedYearProps {
  fieldLabelClasses: string;
  fieldContentDistanceClasses: string;
  labelIconClasses: string;
  single_media_item: {
    created_at: string;
  };
}

const ReleasedYear: React.FC<ReleasedYearProps> = ({
  fieldLabelClasses,
  fieldContentDistanceClasses,
  labelIconClasses,
  single_media_item,
}) => {
  return (
    <div className={`released year ${fieldContentDistanceClasses}`}>
      {/* Label */}
      <Typography variant="h5" className={fieldLabelClasses}>
        <span>
          <CalendarIcon className={labelIconClasses} />
        </span>
        <span>Relased Year</span>
      </Typography>

      {/* Single movie or show released year */}
      <Typography variant="h4" className="text-absolute-white">
        {getYear(single_media_item.created_at)}
      </Typography>
    </div>
  );
};

export default ReleasedYear;
