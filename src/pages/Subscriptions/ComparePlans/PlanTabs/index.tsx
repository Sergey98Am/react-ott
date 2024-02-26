import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import PlanDetails from "./PlanDetails";
import { Plan } from "@/types";

interface PlansTabsProps {
  basicPlan: Plan;
  standardPlan: Plan;
  premiumPlan: Plan;
}

const PlansTabs: React.FC<PlansTabsProps> = ({
  basicPlan,
  standardPlan,
  premiumPlan,
}) => {
  return (
    <Tabs defaultValue="basic" className="block md:hidden">
      <TabsList className="grid w-full grid-cols-3 2xl:p-2.5">
        <TabsTrigger
          value="basic"
          className="2xl:rounded-[10px] 2xl:px-6 2xl:py-3.5 2xl:text-lg"
        >
          Basic
        </TabsTrigger>
        <TabsTrigger
          value="standard"
          className="2xl:rounded-[10px] 2xl:px-6 2xl:py-3.5 2xl:text-lg"
        >
          Standard
        </TabsTrigger>
        <TabsTrigger
          value="premium"
          className="2xl:rounded-[10px] 2xl:px-6 2xl:py-3.5 2xl:text-lg"
        >
          Premium
        </TabsTrigger>
      </TabsList>
      <TabsContent value="basic" className="mt-5">
        <PlanDetails plan={basicPlan} />
      </TabsContent>
      <TabsContent value="standard" className="mt-5">
        <PlanDetails plan={standardPlan} />
      </TabsContent>
      <TabsContent value="premium" className="mt-5">
        <PlanDetails plan={premiumPlan} />
      </TabsContent>
    </Tabs>
  );
};

export default PlansTabs;
