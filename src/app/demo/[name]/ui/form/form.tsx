import FormNextComplex from "./form-next-complex";
import FormNextDemo from "./form-next-demo";
import FormRhfArray from "./form-rhf-array";
import FormRhfCheckbox from "./form-rhf-checkbox";
import FormRhfDemo from "./form-rhf-demo";
import FormTanstackDemo from "./form-tanstack-demo";
export const form = {
  name: "form",
  components: {
    FormNextComplex: <FormNextComplex/>,
    FormRhfCheckbox: <FormRhfCheckbox/>,
    FormRhfArray: <FormRhfArray/>,
    FormNextDemo: <FormNextDemo/>,
    Rhf: <FormRhfDemo />,
    Tanstack: <FormTanstackDemo />,
  },
};