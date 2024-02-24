import PlansTable from "./PlansTable";
import PlansTabs from "./PlanTabs";
import Typography from "@/components/ui/Typography";

const basicPlan = {
  price: "$9.99/Month",
  content:
    "Access to a wide selection of movies and shows, including some new releases.",
  devices: "Watch on one device simultaneously",
  free_trial: "7 Days",
  cancel_anytime: "Yes",
  hdr: "No",
  dolby_atmos: "No",
  ad_free: "No",
  offline_viewing: "No",
  family_sharing: "No",
};

const standardPlan = {
  price: "$12.99/Month",
  content:
    "Access to a wider selection of movies and shows, including most new releases and exclusive content",
  devices: "Watch on Two device simultaneously",
  free_trial: "7 Days",
  cancel_anytime: "Yes",
  hdr: "Yes",
  dolby_atmos: "Yes",
  ad_free: "Yes",
  offline_viewing: "Yes, for select titles.",
  family_sharing: "Yes, up to 5 family members.",
};

const premiumPlan = {
  price: "$14.99/Month",
  content:
    "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
  devices: "Watch on Four device simultaneously",
  free_trial: "7 Days",
  cancel_anytime: "Yes",
  hdr: "Yes",
  dolby_atmos: "Yes",
  ad_free: "Yes",
  offline_viewing: "Yes, for all titles.",
  family_sharing: "Yes, up to 6 family members.",
};

export function ComparePlans() {
  return (
    <div className="flex flex-col items-start gap-y-5 xl:gap-y-[60px] 2xl:gap-y-20">
      {/* Title and description */}
      <div className="flex flex-col gap-y-2 xl:gap-y-2.5 2xl:gap-y-3.5">
        <Typography variant="h2">
          Compare our plans and find the right one for you
        </Typography>
        <Typography variant="body">
          StreamVibe offers three different plans to fit your needs: Basic,
          Standard, and Premium. Compare the features of each plan and choose
          the one that's right for you.
        </Typography>
      </div>
      {/* For large screens */}
      <PlansTable
        basicPlan={basicPlan}
        standardPlan={standardPlan}
        premiumPlan={premiumPlan}
      />
      {/* For Mobile */}
      <PlansTabs
        basicPlan={basicPlan}
        standardPlan={standardPlan}
        premiumPlan={premiumPlan}
      />
    </div>
  );
}

export default ComparePlans;
