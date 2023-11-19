import { PlayIcon } from "./components/icons/PlayIcon";
import Button from "./components/ui/Button";
import Typography from "./components/ui/Typography";

function App() {
  return (
    <div className="bg-absolute-black">
      <Typography variant="h1">App</Typography>
      <Typography variant="body">
        Illum tenetur quos eaque. Ornare potenti nobis saepe rutrum! Imperdiet
        cubilia tenetur? Eu nostra ex maxime tempus nonummy? Tortor nesciunt
        turpis? Sagittis venenatis! Cubilia? Lectus quas laboriosam magna
        imperdiet incidunt, alias sapien occaecat sequi, magnis molestiae?
        Cillum habitasse laudantium asperiores. In voluptate, et senectus,
        perspiciatis maxime consequat eiusmod explicabo, alias congue quod!
        Natoque iste. Convallis autem. Feugiat suspendisse blandit commodo
        dolore, dictumst nunc, sequi sint laborum unde cubilia convallis
        excepteur, aliquid gravida unde neque? Inventore, elementum minim,
        molestiae adipisci repudiandae venenatis! Tortor ut perspiciatis libero
        luctus, eu praesent at augue, eos dictumst blandit mi adipiscing earum
        accusantium, voluptas dignissimos mi.
      </Typography>
      <div className="flex items-start 2xl:text-lg">
        <Button className="gap-1">
          <PlayIcon width={28} height={28} /> Start Watching Now
        </Button>
        <Button>Choose Plan</Button>
        <Button variant="dark">Start Free Trial</Button>
      </div>
    </div>
  );
}

export default App;
