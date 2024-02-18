import Container from "@/components/ui/Container";
import FAQ from "@/components/FAQ";
import FreeTrial from "@/components/FreeTrial";
import Welcome from "./Welcome";
import SupportForm from "./SupportForm";

const Support = () => {
  return (
    <Container className="space-y-24 pb-20 pt-36 md:pb-28 2xl:space-y-32 2xl:pt-40">
      {/* Support form section */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 2xl:gap-20">
        <div className="md:col-span-5 xl:col-span-4">
          <Welcome />
        </div>
        <div className="md:col-span-7 xl:col-span-8">
          <SupportForm />
        </div>
      </div>

      <FAQ />
      <FreeTrial />
    </Container>
  );
};

export default Support;
