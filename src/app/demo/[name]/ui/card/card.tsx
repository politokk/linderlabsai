import CardDemo from "./card-demo";
import CardWithForm from "./card-with-form";

export const card = {
  name: "card",
  components: { 
    Default: <CardDemo />,
    WithForm: <CardWithForm />,
  },
};