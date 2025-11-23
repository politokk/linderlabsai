import CarouselDemo from "./carousel-demo";
import CarouselApiDemo from "./carousel-api";
import CarouselOrientation from "./carousel-orientation";
import CarouselPlugin from "./carousel-plugin";
import CarouselSize from "./carousel-size";
import CarouselSpacing from "./carousel-spacing";

export const carousel = {
  name: "carousel",
  components: { 
    Default: <CarouselDemo />,
    Api: <CarouselApiDemo />,
    Orientation: <CarouselOrientation />,
    Plugin: <CarouselPlugin />,
    Size: <CarouselSize />,
    Spacing: <CarouselSpacing />,
  },
};