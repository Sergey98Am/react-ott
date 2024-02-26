import ctl from "@netlify/classnames-template-literals";
import PricingCard from "./cards/PricingCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import Typography from "./ui/Typography";
import { monthlyPlan, yearlyPlan } from "@/constants";

// When there is a class reusing, used ctl()

const tabContentClasses = ctl(
  `grid 
  grid-cols-1 
  gap-5 
  md:grid-cols-2 
  xl:grid-cols-3 
  2xl:gap-[30px]`,
);

const Pricing = () => {
  return (
    <Tabs
      defaultValue="monthly"
      className="space-y-10 xl:space-y-[60px] 2xl:space-y-20"
    >
      {/* Heading */}
      <div className="flex flex-col items-start space-y-5 lg:flex-row lg:items-end lg:justify-between lg:space-y-0">
        {/* Title and description */}
        <div className="space-y-2 xl:space-y-2.5 2xl:space-y-3.5">
          <Typography variant="h2">
            Choose the plan that's right for you
          </Typography>
          <Typography variant="body">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </Typography>
        </div>

        {/* Tabs for choosing monthly or yearly plan */}
        <TabsList className="2xl:p-2.5">
          <TabsTrigger
            value="monthly"
            className="2xl:rounded-[10px] 2xl:px-6 2xl:py-3.5 2xl:text-lg"
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            value="yearly"
            className="2xl:rounded-[10px] 2xl:px-6 2xl:py-3.5 2xl:text-lg"
          >
            Yearly
          </TabsTrigger>
        </TabsList>
      </div>

      {/* Monthly */}
      <TabsContent value="monthly" className="mt-0">
        <div className={tabContentClasses}>
          {monthlyPlan.map((item, index) => (
            <PricingCard
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              frequency="month"
            />
          ))}
        </div>
      </TabsContent>

      {/* Yearly */}
      <TabsContent value="yearly" className="mt-0">
        <div className={tabContentClasses}>
          {yearlyPlan.map((item, index) => (
            <PricingCard
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              frequency="year"
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Pricing;
