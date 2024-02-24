import { Plan } from "@/types";
import PlanField from "./PlanField";

interface PlanDetailsProps {
  plan: Plan;
}

const PlanDetails: React.FC<PlanDetailsProps> = ({ plan }) => {
  return (
    <div className="space-y-6 rounded-xl border border-dark-black-15 bg-dark-black-06 p-6 text-sm font-medium text-grey-grey-95">
      <div className="grid grid-cols-2 gap-5">
        <PlanField label="Price" field={plan.price} />
        <PlanField label="Free Trial" field={plan.free_trial} />
      </div>
      <div className="grid grid-cols-1 gap-5">
        <PlanField label="Content" field={plan.content} />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <PlanField label="Devices" field={plan.devices} />
        <PlanField label="HDR" field={plan.hdr} />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <PlanField label="Dolby Atmos" field={plan.dolby_atmos} />
        <PlanField label="Add Free" field={plan.ad_free} />
      </div>
    </div>
  );
};

export default PlanDetails;
