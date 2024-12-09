export default interface SectionInterface {
  isModalOpen: boolean;
  setIsModalOpen: Function;
  title?: string;
  date_range?: string;
  modal_title?: string;
  corp: string;
  btn_text: string;
  position: string;
  description: string;
  mcs?: boolean;
  henry?: boolean;
  sena?: boolean;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  ul_list?: Array<string>;
  cert1?: boolean;
  cert2?: boolean;
  cert3?: boolean;
  formModal?: boolean;
  children?: React.ReactNode;
}
