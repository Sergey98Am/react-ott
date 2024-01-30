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
      <Typography variant="body" className={fieldLabelClasses}>
        <span>
          <CalendarIcon className={labelIconClasses} />
        </span>
        <span>Relased Year</span>
      </Typography>

      {/* Released year */}
      <Typography
        variant="body"
        className="text-base font-semibold text-absolute-white 2xl:text-xl"
      >
        {getYear(single_media_item.created_at)}
      </Typography>
    </div>
  );
};

export default ReleasedYear;
