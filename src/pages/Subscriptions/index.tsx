import FreeTrial from "@/components/FreeTrial";
import Pricing from "@/components/Pricing";
import Container from "@/components/ui/Container";
import ComparePlans from "./ComparePlans";

const Subscriptions = () => {
  return (
    <Container className="space-y-24 pb-20 pt-36 md:pb-28 2xl:space-y-32 2xl:pt-40">
      <Pricing />
      <ComparePlans />
      <FreeTrial />
    </Container>
  );
};

export default Subscriptions;
