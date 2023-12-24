import MediaOverlayCard from "@/components/cards/MediaOverlayCard";
import Container from "@/components/ui/Container";

const Movies = () => {
  return (
    <div className="pb-20 pt-36 md:pb-28 2xl:pt-40">
      <Container className="space-y-[150px]">
        <MediaOverlayCard />
      </Container>
    </div>
  );
};

export default Movies;
