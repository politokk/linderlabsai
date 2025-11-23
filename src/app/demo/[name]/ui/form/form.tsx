import FormNextComplex from "./form-next-complex";
import FormNextDemo from "./form-next-demo";
import FormRhfArray from "./form-rhf-array";
import FormRhfCheckbox from "./form-rhf-checkbox";
import FormRhfDemo from "./form-rhf-demo";
import FormTanstackDemo from "./form-tanstack-demo";
import FormTanstackInput from "./form-tanstack-input";
import FormTanstackTextarea from "./form-tanstack-textarea";
import FormTanstackSelect from "./form-tanstack-select";
import FormTanstackCheckbox from "./form-tanstack-checkbox";
import FormTanstackSwitch from "./form-tanstack-switch";
import FormTanstackRadiogroup from "./form-tanstack-radiogroup";
import FormTanstackArray from "./form-tanstack-array";
export const form = {
  name: "form",
  components: {
    FormNextComplex: <FormNextComplex/>,
    FormRhfCheckbox: <FormRhfCheckbox/>,
    FormRhfArray: <FormRhfArray/>,
    FormNextDemo: <FormNextDemo/>,
    Rhf: <FormRhfDemo />,
    Tanstack: <FormTanstackDemo />,
    FormTanstackInput: <FormTanstackInput/>,
    FormTanstackTextarea: <FormTanstackTextarea/>,
    FormTanstackSelect: <FormTanstackSelect/>,
    FormTanstackCheckbox: <FormTanstackCheckbox/>,
    FormTanstackSwitch: <FormTanstackSwitch/>,
    FormTanstackRadiogroup: <FormTanstackRadiogroup/>,
    FormTanstackArray: <FormTanstackArray/>,
  },
};