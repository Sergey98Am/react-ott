import Typography from "@/components/ui/Typography";
import { LanguageIcon } from "@heroicons/react/24/outline";
import React from "react";

interface Language {
  title: string;
}

interface AvailableLanguagesProps {
  fieldLabelClasses: string;
  fieldContentDistanceClasses: string;
  labelIconClasses: string;
  languages: Language[];
}

const AvailableLanguages: React.FC<AvailableLanguagesProps> = ({
  fieldLabelClasses,
  fieldContentDistanceClasses,
  labelIconClasses,
  languages,
}) => {
  return (
    <div className={`available-languages ${fieldContentDistanceClasses}`}>
      {/* Label */}
      <Typography variant="h5" className={fieldLabelClasses}>
        <span>
          <LanguageIcon className={labelIconClasses} />
        </span>
        <span>Available Languages</span>
      </Typography>

      {/* Available languages */}
      <div className="flex flex-wrap gap-2.5">
        {languages.map((item, index) => (
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

export default AvailableLanguages;
