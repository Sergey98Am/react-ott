import Typography from "@/components/ui/Typography";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import React from "react";

interface Genre {
  title: string;
}

interface GenresProps {
  fieldLabelClasses: string;
  fieldContentDistanceClasses: string;
  labelIconClasses: string;
  genres: Genre[];
}

const Genres: React.FC<GenresProps> = ({
  fieldLabelClasses,
  fieldContentDistanceClasses,
  labelIconClasses,
  genres,
}) => {
  return (
    <div className={`genres ${fieldContentDistanceClasses}`}>
      {/* Label */}
      <Typography variant="body" className={fieldLabelClasses}>
        <span>
          <Squares2X2Icon className={labelIconClasses} />
        </span>
        <span>Genres</span>
      </Typography>

      {/* Genres */}
      <div className="flex flex-wrap gap-2.5">
        {genres.map((item, index) => (
          <button
            key={index}
            className="rounded-md border border-dark-black-15 bg-dark-black-08 px-3 py-1.5 text-sm font-medium capitalize 2xl:rounded-lg 2xl:px-3.5 2xl:py-2 2xl:text-lg"
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Genres;
