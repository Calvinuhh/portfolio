import { FormProps } from "../components/Form/Form";

export default interface HeaderInterface extends Omit<FormProps, "closeModal"> {
  btn_text: string;
  seniority: string;
  route: string;
}
