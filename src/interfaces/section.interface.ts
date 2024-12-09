export default interface SectionInterface {
  isModalOpen: boolean;
  setIsModalOpen: Function;
  title?: string;
  modal_title?: string;
  corp: string;
  btn_text: string;
  date_range: string;
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
}
