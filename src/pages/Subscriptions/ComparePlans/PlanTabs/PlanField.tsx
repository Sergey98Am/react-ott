import ctl from "@netlify/classnames-template-literals";

interface PlanFieldProps {
  label: string;
  field: string;
}

const PlanField: React.FC<PlanFieldProps> = ({ label, field }) => {
  const fieldWrapperClasses = ctl(`spacy-y-1`);
  const labelClasses = ctl(`text-grey-grey-60`);

  return (
    <div className={fieldWrapperClasses}>
      <div className={labelClasses}>{label}</div>
      <div>{field}</div>
    </div>
  );
};

export default PlanField;
